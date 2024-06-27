import NextHead from "next/head"
const Head = () => {
    return (

        <NextHead>
            <title>Emigrapp - Dashboard</title>
            <meta name="description" content="Acompañamos todo tu proceso de emigración." />
            <link rel="icon" href="/icon.ico" />
            <link
                rel="stylesheet"
                href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
            />
        </NextHead>
    )
};
export default Head;