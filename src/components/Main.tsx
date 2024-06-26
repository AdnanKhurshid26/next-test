import Image from "next/image";

const Main = () => {
    return (
        <div className="flex flex-col w-screen h-screen justify-start items-center">
            <div className="text-4xl font-bold">This is test</div>
            <Image src='/images/judhajit.png' alt="test" width={200} height={200}/>
            <Image src='/images/judhajit.png' alt="test" width={200} height={200}/>
        </div>
    );
}

export default Main;