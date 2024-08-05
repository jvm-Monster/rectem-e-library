import {TodoList} from "@/app/ui_components/TodoList";

export const DashBoard = () => {
    return (
        <>
            <div className={"p-5 space-y-5"}>
                <h1>Dashboard</h1>
                <div className={"flex space-x-10"}>
                    <div className={"p-5 shadow-md rounded-2xl"}>

                        <div className={"flex items-center space-x-10"}>
                            <h1>Courses</h1>
                            <h1 className={"bg-primary p-2 text-white rounded-full"}>300</h1>
                        </div>
                    </div>

                    <div className={"p-5 shadow-md rounded-2xl"}>

                        <div className={"flex items-center space-x-10"}>
                            <h1>Books</h1>
                            <h1 className={"bg-primary p-2 text-white rounded-full"}>3000</h1>
                        </div>
                    </div>
                </div>

                <div className={"flex justify-between"}>
                    <div className="card bg-blue-600 text-white w-96 shadow-xl">
                        <div className="card-body">
                            <h2 className="card-title">New Arrivals</h2>
                            <p>Check out the latest additions to our collection. Borrow now and enjoy reading!</p>
                            <div className="card-actions justify-end">
                                <button className="btn  btn-sm rounded-full ">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                         fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                         strokeLinejoin="round" className="lucide lucide-arrow-right">
                                        <path d="M5 12h14"/>
                                        <path d="m12 5 7 7-7 7"/>
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="card bg-base-content text-white w-96 shadow-xl">
                        <div className="card-body">
                            <h2 className="card-title">Recommended Reads</h2>
                            <p>5 books recommended for you to read </p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-secondary btn-sm rounded-full ">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                         fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                         strokeLinejoin="round" className="lucide lucide-arrow-right">
                                        <path d="M5 12h14"/>
                                        <path d="m12 5 7 7-7 7"/>
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="card bg-green-700 text-white w-96 shadow-xl">
                        <div className="card-body">
                            <h2 className="card-title">Currently Borrowed</h2>
                            <p>3 books borrowed</p>
                            <p>2 books due soon</p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-sm rounded-full ">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                         fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                         strokeLinejoin="round" className="lucide lucide-arrow-right">
                                        <path d="M5 12h14"/>
                                        <path d="m12 5 7 7-7 7"/>
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>

                </div>

                <TodoList/>

            </div>
        </>
    );
};