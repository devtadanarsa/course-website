import { tutors } from "@/data/constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-regular-svg-icons";
import TutorProfileComponent from "@/components/TutorProfileComponent";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import NavbarComponent from "@/components/NavbarComponent";
import FooterComponent from "@/components/FooterComponent";
import LessonsTableComponent from "@/components/LessonsTableComponent";
import { lessonTable } from "@/data/constants";
import { Card, CardBody } from "@nextui-org/react";

export default function TutorDetail(){
    const star = <FontAwesomeIcon icon={faStar} />;
    const router = useRouter();
    const [pathID, setPathID] = useState(router.query.id);

    useEffect(() => {
      setPathID(router.query.id);
    }, [router.query.id]);

    return(
        <>
            <NavbarComponent />
                {tutors.map((data) => {
                    if(data.id == pathID){
                        return(
                            <>
                                <TutorProfileComponent name={data.name} address={data.address} about={data.about} key={data.id}/>
                                {data.lessonList?.map((value) => {
                                    return(
                                        <div key={value.id} className="mx-24">
                                            <LessonsTableComponent
                                                title={value.title}
                                                description={value.description}
                                                price={value.price}
                                                language={value.language}
                                                
                                            />
                                        </div>
                                    )
                                })}
                            </>
                        )
                    }
                    return null;
                })}
                <Card className="w-fit mx-24">
                    <CardBody>
                    {lessonTable.map((data) => {
                        return (
                        <LessonsTableComponent
                            title={data.title}
                            description={data.description}
                            price={data.price}
                            language={data.language}
                            key={data.id}
                        />
                        );
                    })}
                    </CardBody>
                </Card>
            <FooterComponent />
        </>
        
    )
}