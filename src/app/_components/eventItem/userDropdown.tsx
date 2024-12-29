import React from "react";
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button, user } from "@nextui-org/react";
import { User } from "@/types/mainTypes";

export default function UserDropdown({ users, onSelectionChange }: { users: User[], onSelectionChange: (selectedIds: string[]) => void }) {
    const [selectedKeys, setSelectedKeys] = React.useState(new Set([]));


    const selectedUserIds = React.useMemo(
        () => Array.from(selectedKeys).join(", ").replaceAll("_", " "),
        [selectedKeys],
    );

    const selectedValue = React.useMemo(() => {
        const selectedIds = Array.from(selectedKeys);
        const selectedUsers = users.filter(user => selectedIds.includes(user.id));
        return selectedUsers.map(user => user.firstName).join(", ");
    }, [selectedKeys, users]);

    React.useEffect(() => {
        onSelectionChange(selectedUserIds);
    }, [selectedUserIds]);


    return (
        <Dropdown>
            <DropdownTrigger>
                <Button className="capitalize" variant="bordered">
                    {selectedValue}
                </Button>
            </DropdownTrigger>
            <DropdownMenu
                disallowEmptySelection
                aria-label="Select Multiple Users"
                closeOnSelect={false}
                selectedKeys={selectedKeys}
                selectionMode="multiple"
                variant="flat"
                onSelectionChange={(keys) => setSelectedKeys(keys as Set<React.Key>)}
            >
                {users.map(user => (
                    <DropdownItem key={user.id} value={user.firstName}>{user.firstName + " " + user.lastName}</DropdownItem>
                ))}
            </DropdownMenu>
        </Dropdown>
    );
}

