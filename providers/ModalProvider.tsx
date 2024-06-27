"use client";
import Modal from "@/app/components/modals/Modal";
import AuthModal from "@/app/components/modals/auth-modal/AuthModal";
import UploadModal from "@/app/components/modals/upload-modal/UploadModal";
import { useEffect, useState } from "react";

const ModalProvider = () => {
  const [isMounted, setIsMounted] = useState<boolean>(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <>
      <AuthModal />
      <UploadModal />
    </>
  );
};

export default ModalProvider;
