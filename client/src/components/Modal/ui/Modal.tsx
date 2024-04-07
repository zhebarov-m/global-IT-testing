import {Dialog} from "@headlessui/react";
import styles from './Modal.module.scss'
import {IUser} from "../../../hooks/useGetAllUsers.ts";
import CrossIcon from "../../../assets/icons/cross.svg"

interface ModalProps {
    user: IUser,
    onClose: () => void,
}

export const Modal = ({ user, onClose }: ModalProps) => {
    return (
        <Dialog open={true} onClose={onClose}>
            <div className={styles.bg}>
                <Dialog.Panel className={styles.popup}>
                    <img
                        onClick={onClose}
                        className="absolute top-6 right-6 cursor-pointer"
                        src={CrossIcon}
                        alt=""/>
                    <div className="flex flex-col gap-10">
                        <h1 className="text-2xl font-bold">{user.name}</h1>
                        <div className="flex gap-10">
                            <div className="flex flex-col gap-4">
                                <p>Телефон:</p>
                                <p>Почта:</p>
                                <p>Дата приема:</p>
                                <p>Адресс:</p>
                            </div>
                            <div className="flex flex-col gap-4 text-gray-400">
                                <span>{user.phone}</span>
                                <span>{user.email}</span>
                                <span>{user.hire_date}</span>
                                <span>{user.address}</span>
                            </div>
                        </div>
                        <div className="flex flex-col gap-4">
                            <span className="text-lg">Наименование должности:</span>
                            <p className="text-gray-400">{user.position_name}</p>
                        </div>
                    </div>
                </Dialog.Panel>
            </div>
        </Dialog>
    );
};

export default Modal;
