import { Header } from "../components/header";

export default function Page() {
    const data = [
        { href: "/#lokasi", name: "Lokasi" },
        { href: "/#story", name: "Sejarah" },
        { href: "/#most-populer", name: "Wisata" },
        { href: "/pesan-tiket", name: "Tiket" }
    ];
    return (
        <>
            <Header data={data} />
        </>
    );
}