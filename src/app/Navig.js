


const Navig = () => {
    return (
        <nav className="border-gray-200 bg-white dark:bg-gray-900 dark:border-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2">
                <div className="flex justify-between">
                    <div className="flex">
                        <div className="flex-shrink-0 w-14 h-14 flex items">
                            <img src="./Quiz-Me_.svg"></img>
                            <h1 className="text-xl font-burtons">QuizMe!</h1>
                        </div>
                    </div>
                    <div className="hidden md:ml-6 md:flex sm:items-center">
                        <div className="hidden md:ml-6 md:flex sm:space-x-8">
                            <a className="text-sm border-transparent text-gray-500 dark:text-gray-300 
                                          hover:border-gray-300 hover:text-gray-700 inline-flex items-center
                                          px-1 pt-1 b-2 font-medium cursor-pointer"> About</a>
                            <a className="text-sm border-transparent text-gray-500 dark:text-gray-300 
                                          hover:border-gray-300 hover:text-gray-700 inline-flex items-center
                                          px-1 pt-1 b-2 font-medium cursor-pointer"> Home</a>
                            <a className="text-sm border-transparent text-gray-500 dark:text-gray-300 
                                          hover:border-gray-300 hover:text-gray-700 inline-flex items-center
                                          px-1 pt-1 b-2 font-medium cursor-pointer"> Contact</a>
                        </div>
                    </div>
                </div>
            </div>

        </nav>
    )
};

export default Navig;

