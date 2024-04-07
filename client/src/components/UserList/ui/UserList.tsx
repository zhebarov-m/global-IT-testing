import useGetAllUsers from "../../../hooks/useGetAllUsers.ts";
import {UserCard} from "../../UserCard";
import {MyLoader} from "../../MyLoader";
import {useState} from "react";
import {IoIosArrowBack, IoIosArrowForward} from "react-icons/io";


interface UserListProps {
    query: string
}

export const UserList = ({query}: UserListProps) => {
    const {data: users, isLoading} = useGetAllUsers(query);
    const pageSize = 6;
    const [page, setPage] = useState<number>(1)

    if (isLoading) {
        return <MyLoader/>;
    }

    const startIndex = (page - 1) * pageSize;
    const endIndex = Math.min(startIndex + pageSize, users.length);

    const currentPage = users.slice(startIndex, endIndex)

    const handleNextPage = () => {
        setPage(page + 1)
    }

    const handlePrevPage = () => {
        setPage(page - 1)
    }

    return (
        <div>
            <div className="grid grid-cols-3 gap-6 container">
                {currentPage?.map((user: any) => (
                    <UserCard
                        key={user.phone}
                        user={user}
                    />
                ))}
            </div>
            <div className="fixed left-[270px] top-[50%] flex gap-x-[1200px] w-full text-[80px] text-[#432EAB90]">
                <button
                    className="hover:scale-125 transition"
                    onClick={handlePrevPage}
                    disabled={page === 1}
                >
                    <IoIosArrowBack/>
                </button>
                <button
                    className="hover:scale-125 transition"
                    onClick={handleNextPage}
                    disabled={endIndex >= users.length}
                >
                    <IoIosArrowForward/>
                </button>
            </div>
        </div>
    )
        ;
};
