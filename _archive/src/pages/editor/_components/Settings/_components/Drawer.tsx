function Drawer({title, children}:DrawerProps) {
    return (
        <div className="flex flex-col">
            <div className="p-4 sticky top-0 bg-[#282f3f] z-10">
                <h2 className="text-xl font-bold text-white">{title}</h2>
            </div>
            <div>
                {children}
            </div>
        </div>
    )
}

export default Drawer;

interface DrawerProps {
    title: string;
    children: any;
}