import React from "react";
import styles from "@styles/components/wallets.module.css";
import { FunctionComponent, ReactNode } from "react";
import { Modal } from "@mui/material";
import Typography from "./typography/typography";
import { TEXT_TYPE } from "@constants/typography";

type ModalMessageProps = {
  title: string;
  message: ReactNode;
  closeModal: () => void;
  open: boolean;
};

const ModalMessage: FunctionComponent<ModalMessageProps> = ({
  title,
  message,
  closeModal,
  open,
}) => {
  return (
    <Modal
      disableAutoFocus
      open={open}
      onClose={closeModal}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <div className={styles.menu}>
        <button className={styles.menu_close} onClick={closeModal}>
          <svg viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            ></path>
          </svg>
        </button>
        <Typography type={TEXT_TYPE.BODY_DEFAULT} color="secondary" className={styles.menu_title}>{title}</Typography>
        {message}
      </div>
    </Modal>
  );
};
export default ModalMessage;
