import Input from "../../shared/Input/Input.tsx";

interface UserSearchProps {
    value?: string,
    onChange?: (value: string) => void
    className?: string
}

const UserSearch = (props: UserSearchProps) => {
    const {
        value,
        onChange,
        className
    } = props

    return (
        <div className="w-[1120px] mb-8 mt-14">
            <Input value={value} onChange={onChange} className={className}/>
        </div>
    );
};

export default UserSearch;
