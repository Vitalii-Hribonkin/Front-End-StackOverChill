import s from "../ModalConfirmDelete/ModalConfirmDelete.module.css"

const ModalConfirmDelete = ({ onConfirm, onCancel, onClose }) => {
    return (
        <div className={s.overlay}>
            <div className={s.modal}>
                <svg className={s.iconClose} width="16" height="16" onClick={onClose}>
                    <use href="/icons.svg#close"></use>
                </svg>
                <img className={s.logo} src="/logo.svg" alt="Logo" />
                <p className={s.text}>Are you sure you want to Delete?</p>
                <div className={s.buttons}>
                    <button className={s.deleteBtn} onClick={onConfirm}>Delete</button>
                    <button className={s.cancelBtn} onClick={onCancel}>Cancel</button>
                </div>
            </div>
        </div>
    );
};

export default ModalConfirmDelete;


