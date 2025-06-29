const BrowseTutorial = () => {

    return (
        <section className="flex items-center justify-center bg-indigo-300 py-4 mt-15 h-10/12">
            <div className="flex items-center justify-center p-5 sm:p-10 rounded-4xl m-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-20 p-4 mt-5 rounded-lg">

                    <div>
                        <div className="bg-gray-400 w-80 sm:w-100 rounded-3xl p-5">
                            <h1 className="text-2xl font-bold">FreeCodeCamp</h1>                       
                            <p className="mb-10">
                                Learn to code for free
                            </p>
                            <a href="https://www.freecodecamp.org/"
                            target="_blank"
                            className="bg-gray-900 p-2 rounded-2xl">
                                Start learning
                            </a>
                        </div>
                    </div>

                    <div>
                        <div className="bg-gray-400 w-80 sm:w-100 rounded-3xl p-5">
                            <h1 className="text-2xl font-bold">LeetCode</h1>
                            <p className="mb-10">
                                Coding challenges for all levels
                            </p>
                            <a href="https://leetcode.com/"
                            target="_blank"
                            className="bg-gray-900 p-2 rounded-2xl">
                                Start solving
                            </a>
                        </div>
                    </div>

                    <div>
                        <div className="bg-gray-400 w-80 sm:w-100 rounded-3xl p-5">
                            <h1 className="text-2xl font-bold">Stack OverFlow</h1>                       
                            <p className="mb-10">
                                Find answers to your questions
                            </p>
                            <a href="https://stackoverflow.com/"
                            target="_blank"
                            className="bg-gray-900 p-2 rounded-2xl">
                                Start asking
                            </a>
                        </div>
                    </div>

                    <div>
                        <div className="bg-gray-400 w-80 sm:w-100 rounded-3xl p-5">
                            <h1 className="text-2xl font-bold">GitHub</h1>                       
                            <p className="mb-10">
                                Explore the project source code  on GitHub
                            </p>
                            <a href="https://github.com/"
                            target="_blank"
                            className="bg-gray-900 p-2 rounded-2xl">
                                Go to GitHub
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default BrowseTutorial