import { ReactNode } from "react"

type  MainPageProps = {
    children : ReactNode
    showHeaderMessage : boolean; 
}

export function MainPageLayout({children, showHeaderMessage}: MainPageProps)
{
    // returns div container with header for pages that display the logo    
    return(
        <div className="divMainPageLayout">
            {showHeaderMessage && (<header> <h3 className="powerPingLogo"> <u>PowerPing01</u> </h3> </header>)}
            <main>
                {children}
            </main>
        </div>
    );
}
