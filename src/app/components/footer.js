

export default function Footer() {
    return (
        <footer>
            <hr></hr>
            <div className="grid grid-cols-1 gap-16 md:grid-cols-3">
                <div>
                    <h2 className="text-2xl font-bold mb-6">Coordonnées</h2>
                    <p>Adresse: 123 Rue du Restaurant, Ville</p>
                    <p>Téléphone: (123) 456-7890</p>
                    <p>Email: info@restaurant.com</p>
                </div>
                <div>
                    <h2 className="text-2xl font-bold mb-6">Heures d'ouverture</h2>
                    <p>Lundi - Vendredi: 10h00 - 22h00</p>
                    <p>Samedi - Dimanche: 12h00 - 20h00</p>
                </div>
                <div>
                    <h2 className="text-2xl font-bold mb-6">Suivez-nous</h2>
                    <div className="flex space-x-4">
                        <a href="#" className="text-white hover:text-white">Facebook</a>
                        <a href="#" className="text-white hover:text-white">Twitter</a>
                        <a href="#" className="text-white hover:text-white">Instagram</a>
                    </div>
                </div>
            </div>
            <div className="mt-4 text-center">
                <p>&copy; Fait par <strong>abdoul malik KONDI</strong>. Tous droits réservés.</p>
                <p>contact: +22893561240 </p>
                <p>gmail: <a href="mailto:abdoulmalikkondi8@gmail.com">abdoulmalikkondi8@gmail.com</a> </p>
            </div>
        </footer>
    )
}