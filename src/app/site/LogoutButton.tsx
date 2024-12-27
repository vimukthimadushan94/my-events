import { signOut } from "@/app/auth";
import { Button } from "@nextui-org/react";

export default function LogoutButton() {
    return (<form
        action={async () => {
            "use server"
            await signOut();
        }}
    >
        <Button type="submit">Sign Out</Button>
    </form>);
}