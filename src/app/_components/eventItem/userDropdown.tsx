import React from "react";
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button } from "@nextui-org/react";
import { auth } from "@/app/auth";

export default function UserDropdown() {
    const [selectedKeys, setSelectedKeys] = React.useState(new Set(["Dinuka", "Kamal"]));

    const selectedValue = React.useMemo(
        () => Array.from(selectedKeys).join(", ").replaceAll("_", " "),
        [selectedKeys],
    );

    return (
        <Dropdown>
            <DropdownTrigger>
                <Button className="capitalize" variant="bordered">
                    {selectedValue}
                </Button>
            </DropdownTrigger>
            <DropdownMenu
                disallowEmptySelection
                aria-label="Multiple selection example"
                closeOnSelect={false}
                selectedKeys={selectedKeys}
                selectionMode="multiple"
                variant="flat"
                onSelectionChange={setSelectedKeys}
            >
                <DropdownItem key="Sunimal">Sunimal</DropdownItem>
                <DropdownItem key="number">Kamal</DropdownItem>
                <DropdownItem key="date">Date</DropdownItem>
                <DropdownItem key="single_date">Single Date</DropdownItem>
                <DropdownItem key="iteration">Iteration</DropdownItem>
            </DropdownMenu>
        </Dropdown>
    );
}

