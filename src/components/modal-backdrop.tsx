"use client";
import { useRouter } from "next/navigation";
import React from "react";

function ModalBackdrop() {
  // it must be a client component because it uses useRouter
  const router = useRouter();
  return <div className="modal-backdrop" onClick={() => router.back()} />;
}

export default ModalBackdrop;
