import UserSearch from "../../../components/UserSearch/UserSearch.tsx";
import {UserList} from "../../../components/UserList";
import {useState} from "react";

const ReportPage = () => {
    const [value, setValue] = useState('')

    return (
        <div>
            <UserSearch
                value={value}
                onChange={setValue}
                className="border-2 w-full container mx-auto rounded-3xl p-3 border-[#D4DEFE]"
            />
            <UserList query={value} />
        </div>
    );
};

export default ReportPage;
