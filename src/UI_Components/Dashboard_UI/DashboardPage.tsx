import { MainPageLayout } from "../Shared_Components/MainPageLayout";

import { MainDivContainer } from "./MainDiv";
import {InnerDivContainer} from "./InnerDiv";

import {NavBar} from "../Shared_Components/NavBar";

export function DashboardPage(){
    return (
        <MainPageLayout
            showHeaderMessage = {false}
        >


        <NavBar/>
            <MainDivContainer>
                <InnerDivContainer>
                    <h2>Device 1 Connected Here</h2>
                    <h2>Device 2 Connected Here</h2>
                </InnerDivContainer>
            </MainDivContainer>

    </MainPageLayout>

    );
}