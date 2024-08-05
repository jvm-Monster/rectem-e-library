export const TodoList = () => {
    return (
        <>
            <div className={"p-5  bg-base-content text-white rounded-2xl max-w-sm h-96"}>
                <div className={"flex flex-col "}>
                    <h1 className={"text-3xl"}>To-DO List</h1>
                    <button className={"btn btn-sm rounded-full"}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                             stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                             className="lucide lucide-plus">
                            <path d="M5 12h14"/>
                            <path d="M12 5v14"/>
                        </svg>
                    </button>
                </div>

            </div>

        </>
    );
};