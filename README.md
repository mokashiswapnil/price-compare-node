# price-compare-node


Get Product Offer:

curl -X GET   'http://localhost:3000/offers/amazon'   -H 'accept: application/json'   -H 'auth-key: sdfsdf' 

Response:
{
    "walletOffers": [
        {
            "name": "PhonePe",
            "details": "Get 25% back up to ₹750 with PhonePe. Valid on 1st transaction."
        },
        {
            "name": "MobiKwik",
            "details": "Get 15% back up to ₹450 with MobiKwik. Valid  on 1st transaction."
        }
    ],
    "cardOffers": [
        {
            "name": "HDFCBank",
            "details": "Exchange Offer: Up to ₹ 13,500.00 off"
        },
        {
            "name": "ICICIBank",
            "details": "5% cashback with Amazon Pay ICICI Bank Credit card for Prime-members"
        }
    ]
}

Wrong path parameter:

curl -X GET   'http://localhost:3000/offers/amazon1'   -H 'accept: application/json'   -H 'auth-key: sdfsdf' 

{"message":"Bad Request – Query param not passed properly"}


Invalid auth key:

curl -X GET   'http://localhost:3000/offers/amazon'   -H 'accept: application/json'   -H 'auth-key: sdfsdf1' 

{"message":"Invalid auth key"}

******************************************************

Get Product Price:


curl -X GET   'http://localhost:3000/product/snapdeal?productName=iphone%2012%20pro%20max'   -H 'accept: application/json'   -H 'auth-key: sdfsdf' 

{"price":"Rs 90,000"}

Wrong path parameter:

curl -X GET   'http://localhost:3000/product/snapdeal1?productName=iphone%2012%20pro%20max'   -H 'accept: application/json'   -H 'auth-key: sdfsdf' 


{"message":"Bad Request – Query param not passed properly"}

******************************************************

Get Product Details:

curl -X GET   'http://localhost:3000/product/details?productName=iphone%2012%20pro%20max'   -H 'accept: application/json'   -H 'auth-key: sdfsdf' 


{
    "Model": "Iphone 12 pro max",
    "Finish": "Silver, Graphite, Gold, Pacific Blue",
    "Capacity": "128GB, 256GB, 512GB",
    "Display": "Super Retina XDR display 6.7‑inch (diagonal) all‑screen OLED display 2778x1284-pixel resolution at 458 ppi",
    "Width": "78.1 mm (3.07 inches)",
    "Height": "160.8 mm",
    "Camera": "The iPhone 12 Pro max features four cameras: one front-facing camera and three back-facing cameras, including a telephoto, wide, and ultra-wide camera. The iPhone 12 Pro also features a LiDAR scanner for AR and computer-aided photo enhancement services. iPhone 12 Pro also adds Night Mode for video recording on all four cameras. Night Mode video supports up to 4K resolution and 60 frames per second.[24] Unlike the iPhone 11 Pro and iPhone 11 Pro Max where the only difference was the screen size and battery size, the iPhone 12 Pro Max adds sensor-shift image stabilization to the camera system and replaces the f/2.0 aperture telephoto camera lens with a f/2.2 aperture lens that allows for a maximum optical zoom range of 5x between the three back-facing cameras over the 4x range of the iPhone 12 Pro.[citation needed] The iPhone 12 Pro and iPhone 12 Pro Max are the first smartphones capable of shooting in 10-bit high dynamic range Dolby Vision 4K video at up to 60 frames per second",
    "Sensor": "The iPhone 12 Pro and iPhone 12 Pro Max include mostly the same sensors found on prior iPhone models going back to the iPhone X.These include an accelerometer, gyroscope, barometer, proximity sensor,ambient light sensor, and a digital compass."
}

Wrong Query  parameter:

curl -X GET   'http://localhost:3000/product/details?productName=iphone%2012%20pro%20max1'   -H 'accept: application/json'   -H 'auth-key: sdfsdf' 


{"message":"Bad Request – Query param not passed properly!"}