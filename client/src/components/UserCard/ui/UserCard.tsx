import {Card} from "../../../shared/Card/Card.tsx";
import EmailIcon from "../../../assets/icons/email.svg"
import PhoneIcon from "../../../assets/icons/phone.svg"
import Modal from "../../Modal/ui/Modal.tsx";
import {useState} from "react";
import {IUser} from "../../../hooks/useGetAllUsers.ts";


interface UserCardProps {
    user: IUser
}

export const UserCard = (props: UserCardProps) => {
    const {
        user
    } = props
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const handleCardClick = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div>
            <Card
                title={user.name}
                width={"357px"}
                height={"314px"}
                className="shadow-md rounded-2xl bg-white p-6"
                onClick={handleCardClick}
            >
                <div className="flex flex-col gap-4">
                    <div className="flex gap-4">
                        <img className="pl-[0.25rem]" src={PhoneIcon} alt={user.phone}/>
                        <span>{user.phone}</span>
                    </div>
                    <div className="flex gap-3">
                        <img src={EmailIcon} alt={user.email}/>
                        <span>{user.email}</span>
                    </div>
                </div>
            </Card>
            {isOpen &&
                <Modal user={user} onClose={() => setIsOpen(false)} />}
        </div>
    );
};
