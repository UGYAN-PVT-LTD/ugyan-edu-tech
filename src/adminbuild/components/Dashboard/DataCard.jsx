const DataCard=({icon,count,text})=>{
    return(
        <>
            <div className="px-4 py-9 w-60 h-full flex rounded-xl shadow-lg gap-4 justify-center items-center bg-white">
                <div className="text-blue-700 text-2xl p-3 bg-blue-50 rounded-full flex justify-center items-center">
                    {icon}
                </div>
                <div className="flex flex-col items-start justify-center">
                    <div className="text-2xl ">
                        {count}
                    </div>
                    <div className="text-sm text-gray-600">
                        {text}
                    </div>
                </div>
            </div>
        </>
    )
}
export default DataCard;