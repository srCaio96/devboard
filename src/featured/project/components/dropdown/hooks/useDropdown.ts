import { useState } from "react";

export function useDropdown() {
    const [dropdownIsOpen, setDropdownIsOpen] = useState<boolean>(false);
    const [selectedLabels, setSelectedLabels] = useState<string[]>([]);
      const [openId, setOpenId] = useState(new Set<string>());
    
    function handleClick(e: React.MouseEvent<HTMLButtonElement>) {
        e.preventDefault();

        const value = e.currentTarget.value;
        console.log(value)
        if(value === 'dropdown') {
            setDropdownIsOpen(!dropdownIsOpen);
            setSelectedLabels([]);
        };
        
        setSelectedLabels(label =>                
            label.includes(value) ? 
            label.filter(item => item !== value) : 
            [...label, value]
        );       
    };

    function handleClickDropdown(id: string) {
        setOpenId((prev) => {
        const newSet = new Set(prev);
        
        if (openId.has(id)) {
            newSet.delete(id);
        } else {
            newSet.add(id);
        };

        return newSet;
        });
    };
    
    return { 
        dropdownIsOpen,
        selectedLabels,
        handleClick, 
        handleClickDropdown,
        openId
    };
};