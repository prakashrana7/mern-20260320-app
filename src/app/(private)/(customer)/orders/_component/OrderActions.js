"use client";

import { cancelOrder } from "@/api/orders";
import {
    ORDER_CANCELLED,
    ORDER_PENDING,
} from "@/constants/orderStatus";

import {
    PAYMENT_METHOD_CASH,
    PAYMENT_METHOD_ONLINE,
    PAYMENT_STATUS_FAILED,
    PAYMENT_STATUS_PENDING,
    PAYMENT_STATUS_SUCCESS,
} from "@/constants/payment";

import PayViaKhalti from "./PayViaKhalti";
import PayViaCash from "./PayViaCash";

import { FaEye } from "react-icons/fa";
import { toast } from "react-toastify";
import { useState } from "react";

const OrderActions = ({ order, onOrderCancelled }) => {
    const [selectedPaymentOrder, setSelectedPaymentOrder] =
        useState(null);

    const [cancelling, setCancelling] = useState(false);

    // Get readable payment method
    function getPaymentMethod(method) {
        switch (method) {
            case PAYMENT_METHOD_CASH:
                return "Cash on Delivery";

            case PAYMENT_METHOD_ONLINE:
                return "Khalti Payment";

            default:
                return "Not available";
        }
    }

    // Get readable payment status
    function getPaymentStatus(method, status) {
        if (method === PAYMENT_METHOD_CASH) {
            if (status === PAYMENT_STATUS_SUCCESS) {
                return "Paid";
            }

            if (status === PAYMENT_STATUS_PENDING) {
                return "Pending";
            }

            if (status === PAYMENT_STATUS_FAILED) {
                return "Failed";
            }

            return "Not available";
        }

        if (method === PAYMENT_METHOD_ONLINE) {
            if (status === PAYMENT_STATUS_SUCCESS) {
                return "Paid";
            }

            if (status === PAYMENT_STATUS_PENDING) {
                return "Pending";
            }

            if (status === PAYMENT_STATUS_FAILED) {
                return "Failed";
            }

            return "Not available";
        }

        return "Not available";
    }

    // Payment status color
    function getPaymentStatusClass(status) {
        if (status === PAYMENT_STATUS_SUCCESS) {
            return "text-green-600";
        }

        if (status === PAYMENT_STATUS_FAILED) {
            return "text-red-600";
        }

        if (status === PAYMENT_STATUS_PENDING) {
            return "text-yellow-600";
        }

        return "text-gray-600";
    }

    // Cancel order
    async function handleCancelOrder() {
        if (
            !confirm(
                "Are you sure you want to cancel this order?"
            )
        ) {
            return;
        }

        try {
            setCancelling(true);

            await cancelOrder(order._id);

            toast.info("Order cancelled!");

            if (onOrderCancelled) {
                onOrderCancelled(order._id);
            }
        } catch (error) {
            console.log(error);

            toast.error("Unable to cancel order.");
        } finally {
            setCancelling(false);
        }
    }

    // Close payment popup
    function closePaymentModal() {
        setSelectedPaymentOrder(null);
    }

    // Show payment selection buttons
    const showPaymentSelection =
        order.status === ORDER_PENDING &&
        !order.payment;

    // Show payment information button
    const showPaymentInformation =
        order.payment &&
        order.status !== ORDER_CANCELLED;

    return (
        <>
            <div className="flex items-center gap-3 px-4">

                {/* 
                    Before payment is selected:
                    Cancel + Khalti + Cash
                */}
                {showPaymentSelection && (
                    <>
                        <button
                            type="button"
                            disabled={cancelling}
                            onClick={handleCancelOrder}
                            className="bg-red-600 text-white px-4 py-2 rounded-md shadow cursor-pointer hover:bg-red-700 transition disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {cancelling
                                ? "Cancelling..."
                                : "Cancel"}
                        </button>

                        <PayViaKhalti
                            orderId={order._id}
                        />

                        <PayViaCash
                            orderId={order._id}
                        />
                    </>
                )}

                {/* 
                    After payment is selected:
                    Only View Payment Information
                */}
                {showPaymentInformation && (
                    <button
                        type="button"
                        onClick={() =>
                            setSelectedPaymentOrder(order)
                        }
                        className="flex items-center gap-2 border border-blue-600 text-blue-600 px-4 py-2 rounded-md shadow hover:bg-blue-600 hover:text-white transition cursor-pointer"
                    >
                        <FaEye />
                        View Payment Information
                    </button>
                )}
            </div>

            {/* Payment Information Modal */}
            {selectedPaymentOrder?.payment && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4"
                    onClick={closePaymentModal}
                >
                    <div
                        className="w-full max-w-md rounded-xl bg-white dark:bg-gray-800 shadow-xl"
                        onClick={(e) =>
                            e.stopPropagation()
                        }
                    >

                        {/* Modal Header */}
                        <div className="flex items-center justify-between border-b border-gray-200 dark:border-gray-700 px-6 py-4">
                            <h2 className="text-lg font-semibold text-heading">
                                Payment Information
                            </h2>

                            <button
                                type="button"
                                onClick={closePaymentModal}
                                className="bg-red-600 rounded-xl px-2 hover:bg-red-500 text-white text-2xl cursor-pointer"
                            >
                                ×
                            </button>
                        </div>

                        {/* Payment Information */}
                        <div className="px-6 py-5 space-y-5">

                            {/* Order Number */}
                            <div>
                                <p className="text-sm text-gray-500">
                                    Order Number
                                </p>

                                <p className="font-semibold text-heading break-all">
                                    {
                                        selectedPaymentOrder
                                            .orderNumber
                                    }
                                </p>
                            </div>

                            {/* Payment Method */}
                            <div>
                                <p className="text-sm text-gray-500">
                                    Payment Method
                                </p>

                                <p className="font-semibold text-heading">
                                    {getPaymentMethod(
                                        selectedPaymentOrder
                                            .payment.method
                                    )}
                                </p>
                            </div>

                            {/* Payment Status */}
                            <div>
                                <p className="text-sm text-gray-500">
                                    Payment Status
                                </p>

                                <p
                                    className={`font-semibold ${getPaymentStatusClass(
                                        selectedPaymentOrder
                                            .payment.status
                                    )}`}
                                >
                                    {getPaymentStatus(
                                        selectedPaymentOrder
                                            .payment.method,
                                        selectedPaymentOrder
                                            .payment.status
                                    )}
                                </p>
                            </div>

                            {/* Amount */}
                            <div>
                                <p className="text-sm text-gray-500">
                                    Amount
                                </p>

                                <p className="font-semibold text-heading">
                                    Rs.{" "}
                                    {
                                        selectedPaymentOrder
                                            .payment.amount
                                    }
                                </p>
                            </div>

                            {/* Transaction ID */}
                            {selectedPaymentOrder.payment
                                .transactionId && (
                                <div>
                                    <p className="text-sm text-gray-500">
                                        Transaction ID
                                    </p>

                                    <p className="font-semibold text-heading break-all">
                                        {
                                            selectedPaymentOrder
                                                .payment
                                                .transactionId
                                        }
                                    </p>
                                </div>
                            )}

                            {/* Payment Date */}
                            {selectedPaymentOrder.payment
                                .createdAt && (
                                <div>
                                    <p className="text-sm text-gray-500">
                                        Payment Date
                                    </p>

                                    <p className="font-semibold text-heading">
                                        {new Date(
                                            selectedPaymentOrder
                                                .payment
                                                .createdAt
                                        ).toLocaleString()}
                                    </p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default OrderActions;