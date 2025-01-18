import React from 'react';

const OurPaymentMethods = () => {
    return (
        <div className="bg-gray-100 py-10 rounded-xl">
            <div className="container mx-auto px-6">
                <h2 className="text-2xl font-semibold text-center mb-6">Our Payment Methods</h2>
                <div className="flex flex-wrap justify-center gap-6">

                    <img
                        src="https://img.lazcdn.com/us/domino/dd7d3db1-047c-4e65-b89e-d710eb539976_BD-139-84.png"
                        alt="Cash on Delivery"
                        className="w-20 h-20 object-contain"
                    />
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Visa_2021.svg/1200px-Visa_2021.svg.png"
                        alt="Visa"
                        className="w-20 h-20 object-contain"
                    />
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Mastercard_2019_logo.svg/1200px-Mastercard_2019_logo.svg.png"
                        alt="MasterCard"
                        className="w-20 h-20 object-contain"
                    />
                    <img
                        src="https://www.datocms-assets.com/93849/1684306263-web-platinum-card.webp"
                        alt="American Express"
                        className="w-20 h-20 object-contain"
                    />
                    <img
                        src="https://freelogopng.com/images/all_img/1656235199bkash-logo-transparent.png"
                        alt="bKash"
                        className="w-20 h-20 object-contain"
                    />
                    <img
                        src="https://play-lh.googleusercontent.com/EQC9NtbtRvsNcU1r_5Dr8pWm3hPfN3OjGjzkOqzCEPDJvqBGKyfU9-a2ajNtcrIg1rs"
                        alt="Nagad"
                        className="w-20 h-20 object-contain"
                    />
                    <img
                        src="https://play-lh.googleusercontent.com/sDY6YSDobbm_rX-aozinIX5tVYBSea1nAyXYI4TJlije2_AF5_5aG3iAS7nlrgo0lk8"
                        alt="Rainbow Rocket"
                        className="w-20 h-20 object-contain"
                    />

                </div>
                <div className="text-center mt-4">
                    <p className="text-sm text-gray-600">All payments are securely processed</p>
                </div>
            </div>
        </div>
    );
};

export default OurPaymentMethods;
