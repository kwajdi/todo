import { useContext } from "react";
import {TodoContext} from "../todoProvider";
import * as Checkbox from "@radix-ui/react-checkbox";
import {CheckIcon} from "@radix-ui/react-icons";
import {Label} from "@radix-ui/react-label";
import {cn} from "../helpers";


export default function ListItem({ title, completed, id }: { title: string, completed: boolean, id: number }) {
    const { toggleStatus } = useContext(TodoContext);

    const handleToggleStatus = () => {
        toggleStatus(id);
    };

    return (
        <div className="item">
            <div className="grid gap-4">
                <div className="flex items-center gap-4">
                    <Checkbox.Root className="CheckboxRoot" checked={completed} onClick={handleToggleStatus} id={id.toString()}>
                        <Checkbox.Indicator className="CheckboxIndicator">
                            <CheckIcon />
                        </Checkbox.Indicator>
                    </Checkbox.Root>
                    <Label className={cn("text-base", { "line-through": completed })}  htmlFor={id.toString()}>
                        {title}
                    </Label>
                </div>
            </div>
        </div>
    );
}
