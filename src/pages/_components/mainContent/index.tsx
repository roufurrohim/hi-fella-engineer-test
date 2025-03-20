import Image from "next/image";
import ProductComponents from "./productComponents";
import RFQComponents from "./rfqComponents";
import CompletedComponents from "./completedComponents";

export default function MainContent() {

    return (
        <section className="col-span-4 w-full flex flex-col gap-[10px]">
            <Image
                src="/banner.png"
                alt="banner"
                width={633}
                height={173}
                className="w-full h-[173px] !rounded-[10px]"
                priority
            />

            {/* Completed Component */}
            <CompletedComponents />

            {/* Featured Products */}
            <ProductComponents />

            {/* RFQ */}
            <RFQComponents />
        </section>
    )
}