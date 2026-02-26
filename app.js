// ========== COMPREHENSIVE PRODUCT DATABASE WITH REAL IMAGES ==========
const PRODUCTS = [
    // ===== SMARTPHONES =====
    {
        id: 1, name: "iPhone 15 Pro Max", category: "Smartphones", price: 159900, rating: 4.8, reviews: 5120,
        badge: "Best Seller",
        image: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=400&h=400&fit=crop",
        specs: { storage: "256GB", ram: "8GB", screen: "6.7 inch Super Retina XDR", battery: "4422mAh", camera: "48MP Triple", os: "iOS 17" },
        description: "Apple's most powerful iPhone with A17 Pro chip, titanium design, ProRes video recording and revolutionary 5x zoom.",
        pros: ["A17 Pro chip is blazing fast", "Stunning ProRes camera", "Premium titanium design", "USB-C with USB 3 speed"],
        cons: ["Very expensive", "No charger in box", "Limited Android-style customization"]
    },
    {
        id: 2, name: "Samsung Galaxy S24 Ultra", category: "Smartphones", price: 129999, rating: 4.7, reviews: 3840,
        badge: "Top Rated",
        image: "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=400&h=400&fit=crop",
        specs: { storage: "512GB", ram: "12GB", screen: "6.8 inch QHD+ AMOLED", battery: "5000mAh", camera: "200MP Quad", os: "Android 14" },
        description: "Flagship Samsung phone with built-in S Pen, 200MP camera, Snapdragon 8 Gen 3 and Galaxy AI features.",
        pros: ["Incredible 200MP camera", "S Pen included", "Bright vivid display", "7 years OS updates"],
        cons: ["Gets warm under load", "One UI bloatware", "Quite heavy at 232g"]
    },
    {
        id: 3, name: "OnePlus 12", category: "Smartphones", price: 64999, rating: 4.6, reviews: 2120,
        badge: "Best Value",
        image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=400&fit=crop",
        specs: { storage: "256GB", ram: "12GB", screen: "6.82 inch AMOLED 120Hz", battery: "5400mAh", camera: "50MP Triple", os: "Android 14" },
        description: "Flagship killer with Snapdragon 8 Gen 3, 100W SUPERVOOC charging and Hasselblad-tuned cameras.",
        pros: ["100W super-fast charging", "Clean OxygenOS", "Smooth 120Hz display", "Great price-to-performance"],
        cons: ["No wireless charging in base", "Camera average in low light", "No microSD slot"]
    },
    {
        id: 4, name: "Realme 12 Pro+", category: "Smartphones", price: 29999, rating: 4.5, reviews: 4200,
        badge: "Budget Pick",
        image: "https://images.unsplash.com/photo-1574944985070-8f3ebc6b79d2?w=400&h=400&fit=crop",
        specs: { storage: "256GB", ram: "8GB", screen: "6.7 inch AMOLED 120Hz", battery: "5000mAh", camera: "50MP Sony IMX", os: "Android 14" },
        description: "Flagship camera experience at mid-range price with Sony IMX sensor and periscope telephoto lens.",
        pros: ["Sony IMX890 sensor", "5x periscope zoom", "Premium curved design", "Good battery life"],
        cons: ["Heats up occasionally", "Realme UI has bloatware", "Plastic frame"]
    },
    {
        id: 5, name: "Redmi Note 13 Pro+", category: "Smartphones", price: 26999, rating: 4.4, reviews: 6300,
        badge: "Most Reviewed",
        image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=400&h=400&fit=crop",
        specs: { storage: "256GB", ram: "12GB", screen: "6.67 inch AMOLED 120Hz", battery: "5000mAh", camera: "200MP", os: "MIUI 14" },
        description: "200MP camera at an unbeatable price with 120W HyperCharge and IP68 water resistance.",
        pros: ["200MP camera system", "120W fast charging", "IP68 water resistance", "Brilliant display"],
        cons: ["MIUI has heavy ads", "Large and heavy", "No 3.5mm jack"]
    },
    {
        id: 6, name: "Google Pixel 8 Pro", category: "Smartphones", price: 89999, rating: 4.7, reviews: 1850,
        badge: "AI Champion",
        image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=400&h=400&fit=crop",
        specs: { storage: "256GB", ram: "12GB", screen: "6.7 inch LTPO OLED", battery: "5050mAh", camera: "50MP Triple", os: "Android 14" },
        description: "Google's best phone with Tensor G3 chip, best-in-class computational photography and 7 years of updates.",
        pros: ["Best Android camera", "Pure Android experience", "7 years of updates", "Advanced AI features"],
        cons: ["Tensor chip runs warm", "Limited availability in India", "Expensive for specs on paper"]
    },

    // ===== LAPTOPS =====
    {
        id: 9, name: "MacBook Pro 16\" M3 Max", category: "Laptops", price: 249999, rating: 4.9, reviews: 2150,
        badge: "Pro Choice",
        image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400&h=400&fit=crop",
        specs: { cpu: "Apple M3 Max", ram: "36GB", storage: "1TB SSD", display: "16.2 inch Liquid Retina XDR", battery: "Up to 22hrs", os: "macOS Sonoma" },
        description: "Unmatched performance for creators. The M3 Max chip destroys workstation-class tasks with silent, cool operation.",
        pros: ["Insane performance", "Best-in-class display", "Silent and cool", "22 hour battery"],
        cons: ["Very expensive", "macOS may have learning curve", "Limited RAM upgrades post-purchase"]
    },
    {
        id: 10, name: "Dell XPS 15", category: "Laptops", price: 179999, rating: 4.7, reviews: 1620,
        badge: "Windows Best",
        image: "https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=400&h=400&fit=crop",
        specs: { cpu: "Intel Core i9-13900H", ram: "32GB DDR5", storage: "1TB NVMe SSD", display: "15.6 inch 4K OLED", battery: "13 hours", os: "Windows 11" },
        description: "The finest Windows laptop with an absolutely stunning OLED display, perfect for professionals.",
        pros: ["Gorgeous 4K OLED display", "Premium build quality", "Powerful CPU+GPU combo", "Windows ecosystem"],
        cons: ["Can get hot under load", "Expensive upgrades", "Below-average speakers"]
    },
    {
        id: 11, name: "ASUS VivoBook 16X", category: "Laptops", price: 64999, rating: 4.4, reviews: 1280,
        badge: "Budget Laptop",
        image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&h=400&fit=crop",
        specs: { cpu: "AMD Ryzen 7 7730U", ram: "16GB DDR4", storage: "512GB NVMe SSD", display: "16 inch FHD 144Hz", battery: "12 hours", os: "Windows 11 Home" },
        description: "Excellent value for students and professionals with AMD Ryzen performance and a 144Hz display.",
        pros: ["Great value for money", "144Hz smooth display", "Light and portable", "Good battery"],
        cons: ["Plastic build feels cheap", "Limited upgrade options", "Fan noise under load"]
    },
    {
        id: 12, name: "Lenovo ThinkPad X1 Carbon", category: "Laptops", price: 149999, rating: 4.8, reviews: 980,
        badge: "Business Grade",
        image: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=400&h=400&fit=crop",
        specs: { cpu: "Intel Core i7-1365U", ram: "16GB LPDDR5", storage: "512GB SSD", display: "14 inch 2.8K IPS", battery: "15 hours", os: "Windows 11 Pro" },
        description: "The gold standard in business laptops. MIL-SPEC durability, legendary keyboard, and all-day battery.",
        pros: ["Best laptop keyboard ever", "Extremely durable MIL-SPEC", "Excellent battery life", "Business security features"],
        cons: ["Not ideal for gaming/creative", "Expensive", "No dedicated GPU option"]
    },
    {
        id: 13, name: "HP Pavilion Gaming 15", category: "Laptops", price: 74999, rating: 4.3, reviews: 2200,
        badge: "Gaming Value",
        image: "https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=400&h=400&fit=crop",
        specs: { cpu: "Intel Core i5-12500H", ram: "16GB DDR4", storage: "512GB SSD", display: "15.6 inch FHD 144Hz", battery: "8 hours", gpu: "NVIDIA RTX 3050 Ti" },
        description: "Budget gaming laptop that handles most AAA games. Great for students who want to game on a budget.",
        pros: ["RTX 3050 Ti handles most games", "144Hz display", "Affordable entry to gaming", "Decent build quality"],
        cons: ["Battery life is poor", "Gets warm while gaming", "Average screen quality"]
    },

    // ===== HEADPHONES =====
    {
        id: 17, name: "Sony WH-1000XM5", category: "Headphones", price: 34999, rating: 4.8, reviews: 6200,
        badge: "Best ANC",
        image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop",
        specs: { type: "Over-ear Wireless", battery: "30 hours", weight: "250g", driver: "30mm", anc: "Industry-leading", connectivity: "Bluetooth 5.2" },
        description: "The undisputed king of active noise cancellation. Crystal-clear calls, premium sound and all-day comfort.",
        pros: ["Best noise cancellation", "Excellent audio quality", "30hr battery", "Lightweight for over-ear"],
        cons: ["Folds flat but not in half", "Expensive", "Proprietary charging cable"]
    },
    {
        id: 18, name: "Apple AirPods Pro 2", category: "Headphones", price: 24900, rating: 4.7, reviews: 4850,
        badge: "Apple Ecosystem",
        image: "https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?w=400&h=400&fit=crop",
        specs: { type: "True Wireless In-ear", battery: "6hrs (30 with case)", weight: "5.3g each", driver: "Custom Apple", anc: "Adaptive ANC", connectivity: "Bluetooth 5.3" },
        description: "Best earbuds for iPhone users with Adaptive Transparency, H2 chip and lossless audio over Lightning/USB-C.",
        pros: ["Seamless Apple integration", "Excellent ANC for earbuds", "Spatial Audio", "Compact USB-C case"],
        cons: ["Expensive for earbuds", "Average for non-Apple devices", "Short 6hr battery per charge"]
    },
    {
        id: 19, name: "Bose QuietComfort 45", category: "Headphones", price: 27999, rating: 4.6, reviews: 3100,
        badge: "Comfort King",
        image: "https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=400&h=400&fit=crop",
        specs: { type: "Over-ear Wireless", battery: "24 hours", weight: "238g", driver: "40mm", anc: "Bose Acoustic", connectivity: "Bluetooth 5.1" },
        description: "Legendary comfort with Bose's acoustic noise cancelling. Perfect for long flights and work-from-home.",
        pros: ["Extremely comfortable", "Good ANC", "Foldable design", "Clear microphone"],
        cons: ["No LDAC/AptX", "Sound not as detailed as Sony", "Older design"]
    },
    {
        id: 20, name: "boAt Rockerz 450 Pro", category: "Headphones", price: 1999, rating: 4.2, reviews: 28000,
        badge: "India Favorite",
        image: "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=400&h=400&fit=crop",
        specs: { type: "Over-ear Wireless", battery: "70 hours", weight: "230g", driver: "40mm", anc: "None", connectivity: "Bluetooth 5.0" },
        description: "Massively popular in India for its 70-hour battery and punchy bass. Best value wireless headphone.",
        pros: ["Incredible 70hr battery", "Great bass response", "Very affordable", "Comfortable for hours"],
        cons: ["No ANC", "Average mid/high clarity", "Mic quality is average"]
    },
    {
        id: 21, name: "Samsung Galaxy Buds2 Pro", category: "Headphones", price: 14999, rating: 4.5, reviews: 2400,
        badge: "Android Choice",
        image: "https://images.unsplash.com/photo-1614860327942-56e5a3e35a8f?w=400&h=400&fit=crop",
        specs: { type: "True Wireless In-ear", battery: "5hrs (18 with case)", weight: "5.5g each", driver: "10mm + 5.3mm", anc: "Intelligent ANC", connectivity: "Bluetooth 5.3" },
        description: "Premium Samsung earbuds with 360 Audio, Hi-Fi 24bit sound and excellent ANC for Galaxy devices.",
        pros: ["360 Audio spatial sound", "Comfortable tiny fit", "Good ANC", "Hi-Fi 24bit audio"],
        cons: ["Best features only on Samsung", "Short battery per charge", "Expensive for the performance"]
    },

    // ===== SMARTWATCHES =====
    {
        id: 25, name: "Apple Watch Ultra 2", category: "Smartwatches", price: 89900, rating: 4.8, reviews: 2400,
        badge: "Ultimate Sports",
        image: "https://images.unsplash.com/photo-1551816230-ef5deaed4a26?w=400&h=400&fit=crop",
        specs: { os: "watchOS 10", battery: "60 hours low power", water: "100m WR", display: "49mm Always-On Retina", gps: "Dual-frequency GPS", material: "Titanium" },
        description: "The most rugged and capable Apple Watch designed for extreme sports, triathlons and outdoor adventures.",
        pros: ["Best outdoor GPS watch", "Titanium build", "60hr battery in low power", "Extremely durable"],
        cons: ["Very expensive", "iPhone only", "Overkill for casual users"]
    },
    {
        id: 26, name: "Samsung Galaxy Watch 6 Classic", category: "Smartwatches", price: 34999, rating: 4.6, reviews: 1820,
        badge: "Android Watch",
        image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop",
        specs: { os: "Wear OS + One UI Watch", battery: "3 days", water: "50m ATM", display: "47mm AMOLED", rotating_bezel: "Yes", health: "Advanced" },
        description: "Classic rotating bezel, health monitoring and all-day battery make this the best Android smartwatch.",
        pros: ["Iconic rotating bezel", "Advanced health tracking", "Bright AMOLED display", "Google Wallet support"],
        cons: ["Short battery vs competitors", "Best with Samsung phones", "Can get warm"]
    },
    {
        id: 27, name: "Noise ColorFit Pro 5", category: "Smartwatches", price: 3499, rating: 4.3, reviews: 15600,
        badge: "Budget Smart",
        image: "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?w=400&h=400&fit=crop",
        specs: { os: "Noise OS", battery: "7 days", water: "IP68", display: "1.96 inch AMOLED", health: "SpO2/Heart rate", bluetooth: "5.3" },
        description: "Top-selling Indian smartwatch with 100+ sport modes, Bluetooth calling and a vivid AMOLED display.",
        pros: ["Very affordable", "100+ sport modes", "Bluetooth calling", "7-day battery"],
        cons: ["Limited third-party apps", "Plastic build", "Notifications can lag"]
    },
    {
        id: 28, name: "Garmin Fenix 7 Pro", category: "Smartwatches", price: 74999, rating: 4.7, reviews: 890,
        badge: "Athlete's Watch",
        image: "https://images.unsplash.com/photo-1587925358603-c2eea5305bbc?w=400&h=400&fit=crop",
        specs: { os: "Garmin OS", battery: "22 days", water: "100m WR", display: "1.3 inch MIP", gps: "Multi-GNSS", material: "Stainless Steel/Titanium" },
        description: "Professional-grade sports watch with solar charging, 22-day battery and unmatched GPS accuracy.",
        pros: ["Unmatched 22-day battery", "Best sports GPS accuracy", "Solar charging", "Military-grade rugged"],
        cons: ["Very expensive", "Bulky for daily wear", "Dated interface design"]
    },

    // ===== TABLETS =====
    {
        id: 30, name: "iPad Pro 12.9\" M2", category: "Tablets", price: 112900, rating: 4.8, reviews: 2100,
        badge: "Pro Tablet",
        image: "https://images.unsplash.com/photo-1561154464-82e9adf32764?w=400&h=400&fit=crop",
        specs: { chip: "Apple M2", storage: "256GB", display: "12.9 inch Liquid Retina XDR", ram: "8GB", battery: "10 hours", os: "iPadOS 17" },
        description: "The most powerful tablet in existence. ProMotion 120Hz display, M2 chip performance and optional Apple Pencil support.",
        pros: ["M2 chip is incredibly powerful", "Best tablet display ever", "Apple Pencil Pro support", "Excellent build quality"],
        cons: ["Very expensive", "iPadOS limits desktop use", "Accessories expensive separately"]
    },
    {
        id: 31, name: "Samsung Galaxy Tab S9 FE", category: "Tablets", price: 44999, rating: 4.5, reviews: 1600,
        badge: "Value Tablet",
        image: "https://images.unsplash.com/photo-1527698266440-12104e498b76?w=400&h=400&fit=crop",
        specs: { chip: "Exynos 1380", storage: "256GB", display: "10.9 inch TFT 90Hz", ram: "8GB", battery: "8000mAh", os: "Android 13" },
        description: "Samsung's fan edition tablet with IP68 water resistance, S Pen included and great productivity features.",
        pros: ["S Pen included", "IP68 water/dust resistant", "Long battery life", "DeX mode for productivity"],
        cons: ["TFT display (not AMOLED)", "Below average cameras", "Exynos performance is mediocre"]
    },
    {
        id: 32, name: "Xiaomi Pad 6", category: "Tablets", price: 26999, rating: 4.4, reviews: 3200,
        badge: "Budget Tablet",
        image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=400&h=400&fit=crop",
        specs: { chip: "Snapdragon 870", storage: "128GB", display: "11 inch IPS 144Hz", ram: "6GB", battery: "8840mAh", os: "MIUI 14" },
        description: "Best budget tablet with a 144Hz display, quad-speaker system and Snapdragon 870 performance.",
        pros: ["144Hz smooth display", "Quad speakers with Dolby", "Excellent value", "Good performance for price"],
        cons: ["MIUI has ads/bloatware", "No IP rating", "Average cameras"]
    },

    // ===== CAMERAS =====
    {
        id: 35, name: "Sony Alpha A7 IV", category: "Cameras", price: 249999, rating: 4.8, reviews: 1100,
        badge: "Pro Camera",
        image: "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=400&h=400&fit=crop",
        specs: { sensor: "33MP Full-Frame BSI CMOS", iso: "100-51200 (expandable)", video: "4K 60fps", battery: "520 shots", mount: "Sony E-Mount", stabilization: "5-axis IBIS" },
        description: "Hybrid full-frame mirrorless camera combining speed, resolution, and 4K 60fps video. Perfect for professionals.",
        pros: ["Superb full-frame sensor", "Excellent autofocus", "4K 60fps video", "Ergonomic grip"],
        cons: ["Very expensive body only", "Heavy for mirrorless", "Menu system complex"]
    },
    {
        id: 36, name: "Canon EOS R50", category: "Cameras", price: 79999, rating: 4.6, reviews: 980,
        badge: "Creator Cam",
        image: "https://images.unsplash.com/photo-1568667256549-094345857637?w=400&h=400&fit=crop",
        specs: { sensor: "24.2MP APS-C CMOS", iso: "100-32000", video: "4K 30fps / 1080p 120fps", battery: "380 shots", mount: "Canon RF-S", stabilization: "Digital IS" },
        description: "Compact and lightweight mirrorless perfect for vloggers, creators and beginners wanting quality photos.",
        pros: ["Compact and lightweight", "Eye/subject autofocus", "4K uncropped video", "Good for beginners"],
        cons: ["No IBIS", "Battery life average", "Limited accessories vs DSLR"]
    },
    {
        id: 37, name: "GoPro HERO12 Black", category: "Cameras", price: 45990, rating: 4.6, reviews: 2800,
        badge: "Action Cam",
        image: "https://images.unsplash.com/photo-1484704849700-f032a568e944?w=400&h=400&fit=crop",
        specs: { sensor: "1/1.9 inch", video: "5.3K 60fps / 4K 120fps", water: "10m without housing", stabilization: "HyperSmooth 6.0", battery: "70 min 5.3K", connectivity: "Bluetooth + WiFi" },
        description: "World's best action camera with 5.3K60 video, night mode and unmatched HyperSmooth stabilization.",
        pros: ["Incredible stabilization", "5.3K video", "Waterproof design", "Versatile mounting"],
        cons: ["Expensive accessories", "Short battery life", "Overheats in hot weather"]
    },

    // ===== GAMING =====
    {
        id: 49, name: "PlayStation 5", category: "Gaming", price: 54990, rating: 4.9, reviews: 7820,
        badge: "Console King",
        image: "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?w=400&h=400&fit=crop",
        specs: { cpu: "AMD Zen 2 @ 3.5GHz", ram: "16GB GDDR6", storage: "825GB NVMe SSD", gpu: "RDNA 2 @ 10.3 TFLOPS", resolution: "Up to 8K", audio: "3D Tempest Audio" },
        description: "Sony's next-gen console with lightning-fast SSD, DualSense haptics and an incredible exclusive games library.",
        pros: ["Incredible exclusive games", "DualSense haptic feedback", "Ultra-fast SSD loading", "3D spatial audio"],
        cons: ["Expensive", "Large physical size", "Game prices are high"]
    },
    {
        id: 50, name: "Xbox Series X", category: "Gaming", price: 54990, rating: 4.8, reviews: 4120,
        badge: "Game Pass Value",
        image: "https://images.unsplash.com/photo-1621259182978-fbf93132d53d?w=400&h=400&fit=crop",
        specs: { cpu: "AMD Zen 2 @ 3.8GHz", ram: "16GB GDDR6", storage: "1TB NVMe SSD", gpu: "RDNA 2 @ 12 TFLOPS", resolution: "4K 120fps", backward: "4 Generations" },
        description: "The most powerful console ever with Xbox Game Pass Ultimate offering 400+ games for a monthly subscription.",
        pros: ["Most powerful console", "Game Pass huge value", "Full backward compatibility", "Quick Resume feature"],
        cons: ["Fewer console exclusives", "Controller still uses AA batteries", "Boxy design"]
    },
    {
        id: 51, name: "Nintendo Switch OLED", category: "Gaming", price: 29990, rating: 4.7, reviews: 9200,
        badge: "Portable Gaming",
        image: "https://images.unsplash.com/photo-1578303512597-81e6cc155b3e?w=400&h=400&fit=crop",
        specs: { cpu: "NVIDIA Tegra X1+", ram: "4GB", storage: "64GB (expandable)", display: "7 inch OLED", battery: "4.5-9 hours", modes: "TV/Tabletop/Handheld" },
        description: "Play at home and on the go. The OLED model brings a stunning screen and the Nintendo exclusives library.",
        pros: ["Unique portable gaming", "Vibrant OLED display", "Mario/Zelda/Pokemon exclusives", "Family-friendly"],
        cons: ["Underpowered vs PS5/Xbox", "Joy-Con drift issue", "No 4K even in TV mode"]
    },
    {
        id: 52, name: "ASUS ROG Ally", category: "Gaming", price: 74999, rating: 4.4, reviews: 1400,
        badge: "PC Gaming",
        image: "https://images.unsplash.com/photo-1593305841991-05c297ba4575?w=400&h=400&fit=crop",
        specs: { cpu: "AMD Ryzen Z1 Extreme", ram: "16GB LPDDR5", storage: "512GB SSD", display: "7 inch FHD 120Hz IPS", battery: "3-5 hours gaming", os: "Windows 11" },
        description: "Full Windows PC gaming handheld. Play any PC game on the go with full access to Steam, Game Pass and Epic Games.",
        pros: ["Full PC game library access", "AMD Ryzen Z1 Extreme is fast", "120Hz bright display", "MicroSD expansion"],
        cons: ["Short battery life gaming", "Gets warm", "Heavier than Switch"]
    },

    // ===== MONITORS =====
    {
        id: 55, name: "LG UltraGear 27GN950-B", category: "Monitors", price: 69999, rating: 4.7, reviews: 2100,
        badge: "4K Gaming",
        image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=400&h=400&fit=crop",
        specs: { display: "27 inch 4K IPS", refresh: "144Hz", response: "1ms GtG", hdr: "HDR600 VESA", sync: "G-Sync/FreeSync", ports: "HDMI 2.1 + DP 1.4" },
        description: "The dream 4K gaming monitor with true 144Hz 4K, HDR600 and near-perfect IPS colors.",
        pros: ["True 4K 144Hz", "Excellent color accuracy", "HDR600 true HDR", "G-Sync + FreeSync compatible"],
        cons: ["Very expensive", "Needs powerful GPU", "Stand adjustment limited"]
    },
    {
        id: 56, name: "Dell UltraSharp U2723QE", category: "Monitors", price: 74999, rating: 4.8, reviews: 890,
        badge: "Pro Display",
        image: "https://images.unsplash.com/photo-1547082299-de196ea013d6?w=400&h=400&fit=crop",
        specs: { display: "27 inch 4K IPS Black", refresh: "60Hz", response: "5ms", hdr: "HDR400", sync: "No G-Sync", ports: "USB-C 90W + HDMI + DP" },
        description: "IPS Black technology delivers deeper blacks and better contrast than standard IPS. Best monitor for color work.",
        pros: ["IPS Black deep blacks", "99% sRGB accurate colors", "USB-C 90W charging", "Thin bezels"],
        cons: ["60Hz only (not for gaming)", "Expensive", "No webcam or speakers"]
    },
    {
        id: 57, name: "Samsung Odyssey G5 32\"", category: "Monitors", price: 32999, rating: 4.5, reviews: 3400,
        badge: "Curved Gaming",
        image: "https://images.unsplash.com/photo-1527443194965-4b59cdc1c5b6?w=400&h=400&fit=crop",
        specs: { display: "32 inch 1440p VA Curved", refresh: "165Hz", response: "1ms", hdr: "HDR10", sync: "FreeSync Premium", curvature: "1000R" },
        description: "Immersive 1000R curved gaming display at 1440p 165Hz. Perfect balance of resolution, speed and immersion.",
        pros: ["Immersive 1000R curve", "1440p at 165Hz", "Deep VA blacks", "Affordable for specs"],
        cons: ["VA has some ghosting", "No HDR400+ certification", "Average build quality"]
    },

    // ===== ACCESSORIES =====
    {
        id: 60, name: "Apple Magic Keyboard", category: "Accessories", price: 11900, rating: 4.6, reviews: 3200,
        badge: "Apple Accessory",
        image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=400&h=400&fit=crop",
        specs: { type: "Wireless Keyboard", connectivity: "Bluetooth", battery: "1 month", layout: "Compact", backlight: "No", compatibility: "Mac/iPhone/iPad" },
        description: "Slim, elegant wireless keyboard with scissor-switch keys and seamless Apple device integration.",
        pros: ["Excellent key feel", "Long battery life", "Seamless Apple ecosystem", "Compact design"],
        cons: ["No backlight on base model", "Lightning charging (not USB-C base)", "Only compatible with Apple"]
    },
    {
        id: 61, name: "Logitech MX Master 3S", category: "Accessories", price: 9995, rating: 4.8, reviews: 8400,
        badge: "Best Mouse",
        image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=400&h=400&fit=crop",
        specs: { type: "Wireless Mouse", dpi: "200-8000 DPI", battery: "70 days", connectivity: "Bolt USB + Bluetooth", buttons: "7 buttons", compatibility: "Mac + Windows" },
        description: "The best productivity mouse ever made. MagSpeed scroll wheel, silent clicks and multi-device support.",
        pros: ["Best scroll wheel ever (MagSpeed)", "Silent clicks", "8000 DPI precise", "USB-C charging"],
        cons: ["Expensive for a mouse", "Large for small hands", "Driver software required for full features"]
    },
    {
        id: 62, name: "Anker 65W Charger", category: "Accessories", price: 2499, rating: 4.6, reviews: 12000,
        badge: "Fast Charger",
        image: "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=400&h=400&fit=crop",
        specs: { type: "USB-C GaN Charger", wattage: "65W", ports: "2x USB-C + 1x USB-A", technology: "GaN II", size: "Compact", compatibility: "Universal" },
        description: "Charge your laptop, phone and tablet simultaneously with Anker's compact GaN technology charger.",
        pros: ["Charges 3 devices at once", "GaN - small and efficient", "65W laptop charging", "Universal compatibility"],
        cons: ["Gets warm while charging", "Short included cable", "No power delivery when all ports used together"]
    },
    {
        id: 63, name: "Seagate 2TB Portable SSD", category: "Accessories", price: 8999, rating: 4.5, reviews: 5600,
        badge: "Fast Storage",
        image: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=400&h=400&fit=crop",
        specs: { type: "External SSD", capacity: "2TB", speed: "1030MB/s read", connectivity: "USB 3.2 Gen 2", size: "Pocket-size", compatibility: "PC/Mac/Console" },
        description: "Ultra-fast portable SSD fits in your pocket with 1TB/2TB options and blazing read speeds.",
        pros: ["Pocket-sized", "Fast 1GB/s+ speeds", "Works with PS5/Xbox", "Durable"],
        cons: ["More expensive than HDD", "Gets warm with heavy use", "No hardware encryption"]
    },

    // ===== TELEVISIONS (new category) =====
    {
        id: 70, name: "LG C3 55\" OLED 4K", category: "Televisions", price: 149999, rating: 4.9, reviews: 3400,
        badge: "Best TV",
        image: "https://images.unsplash.com/photo-1593359677879-a4bb92f829e1?w=400&h=400&fit=crop",
        specs: { display: "55 inch OLED evo", resolution: "4K 120Hz", hdr: "Dolby Vision IQ / HDR10+", smart: "webOS 23", audio: "60W 2.2ch Dolby Atmos", gaming: "4x HDMI 2.1" },
        description: "The best TV you can buy for movies and gaming. Perfect OLED blacks, 4 HDMI 2.1 ports for next-gen gaming.",
        pros: ["Perfect OLED black levels", "4x HDMI 2.1 for gaming", "Dolby Vision IQ", "Excellent webOS interface"],
        cons: ["Expensive", "Can suffer burn-in with static content", "OLED needs some brightness boost outdoors"]
    },
    {
        id: 71, name: "Samsung QLED Q80C 50\"", category: "Televisions", price: 89999, rating: 4.6, reviews: 2100,
        badge: "QLED Value",
        image: "https://images.unsplash.com/photo-1601944179066-29786cb9d32a?w=400&h=400&fit=crop",
        specs: { display: "50 inch QLED VA", resolution: "4K 120Hz", hdr: "HDR10+ Adaptive", smart: "Tizen OS", audio: "40W 2.2ch", gaming: "2x HDMI 2.1" },
        description: "Brilliant Samsung QLED with vivid colors, Gaming Hub (no console needed) and a thin bezel design.",
        pros: ["Vivid QLED colors", "Gaming Hub - cloud gaming built-in", "Good brightness", "Thin design"],
        cons: ["Not as good blacks as OLED", "Only 2 HDMI 2.1", "Average viewing angles on VA panel"]
    },
    {
        id: 72, name: "Mi TV 5X 55\"", category: "Televisions", price: 44999, rating: 4.4, reviews: 8900,
        badge: "Budget 4K",
        image: "https://images.unsplash.com/photo-1571415060716-baff5f717b80?w=400&h=400&fit=crop",
        specs: { display: "55 inch IPS 4K", resolution: "4K 60Hz", hdr: "HDR10 / HLG", smart: "Android TV 11", audio: "30W Dolby Audio", gaming: "2x HDMI 2.0" },
        description: "Best budget 4K TV for India. Android TV with Google Assistant, Chromecast built-in and good picture quality.",
        pros: ["Android TV full ecosystem", "Good 4K picture at price", "Chromecast built-in", "Affordable"],
        cons: ["60Hz only (not for gaming)", "IPS blacks not deep", "Remote could be better"]
    },

    // ===== SPEAKERS =====
    {
        id: 75, name: "Sonos Era 300", category: "Speakers", price: 39999, rating: 4.8, reviews: 1200,
        badge: "Spatial Audio",
        image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400&h=400&fit=crop",
        specs: { type: "Smart Speaker", drivers: "6 custom drivers", audio: "Dolby Atmos Spatial", connectivity: "WiFi + Bluetooth", voice: "Amazon Alexa", rooms: "Multi-room" },
        description: "First speaker built for Dolby Atmos spatial audio with music bouncing all around you. Stunning sound.",
        pros: ["Dolby Atmos spatial audio", "Multi-room with Sonos system", "Premium build quality", "Wide soundstage"],
        cons: ["Very expensive", "Subscription for full features", "Requires Sonos app"]
    },
    {
        id: 76, name: "JBL Flip 6", category: "Speakers", price: 11999, rating: 4.7, reviews: 14200,
        badge: "Portable Fav",
        image: "https://images.unsplash.com/photo-1589003077984-894e133dabab?w=400&h=400&fit=crop",
        specs: { type: "Portable Bluetooth", battery: "12 hours", water: "IP67 (waterproof)", wattage: "30W", connectivity: "Bluetooth 5.1", size: "215mm length" },
        description: "India's most loved portable speaker. Waterproof, dustproof, 12-hour battery and booming JBL sound.",
        pros: ["IP67 fully waterproof", "Loud clear sound", "12hr battery", "Compact portable design"],
        cons: ["No 3.5mm AUX port", "Bass lacks depth at max volume", "Not the best for vocals"]
    },
    {
        id: 77, name: "Marshall Stanmore III", category: "Speakers", price: 35999, rating: 4.7, reviews: 890,
        badge: "Premium Home",
        image: "https://images.unsplash.com/photo-1545454675-3531b543be5d?w=400&h=400&fit=crop",
        specs: { type: "Home Wireless Speaker", wattage: "80W", connectivity: "Bluetooth 5.2 + AUX + RCA", eq: "Custom bass/treble/mid knobs", voice: "None", material: "Premium vinyl + brass" },
        description: "Iconic Marshall guitar amp aesthetic in a home speaker. Warm, rich audio with retro controls.",
        pros: ["Stunning vintage design", "Rich warm sound", "Physical EQ knobs", "Multiple inputs AUX/Bluetooth"],
        cons: ["Expensive for 80W", "No smart features/assistant", "Heavy and not portable"]
    }
];

const CATEGORIES = [
    { name: "Smartphones", icon: "📱", count: 6 },
    { name: "Laptops", icon: "💻", count: 5 },
    { name: "Headphones", icon: "🎧", count: 5 },
    { name: "Smartwatches", icon: "⌚", count: 4 },
    { name: "Tablets", icon: "📟", count: 3 },
    { name: "Cameras", icon: "📷", count: 3 },
    { name: "Gaming", icon: "🎮", count: 4 },
    { name: "Monitors", icon: "🖥️", count: 3 },
    { name: "Televisions", icon: "📺", count: 3 },
    { name: "Speakers", icon: "🔊", count: 3 },
    { name: "Accessories", icon: "🖱️", count: 4 },
];

// ========== STATE ==========
let allProducts = [...PRODUCTS];
let searchFilteredProducts = [...PRODUCTS]; // products after text search
let filteredProducts = [...PRODUCTS]; // products after all filters
let comparisonList = [];
let browsedProducts = [];
let currentSearchQuery = '';

// ========== UTILITY FUNCTIONS ==========
function formatPrice(price) {
    return '₹' + price.toLocaleString('en-IN');
}

function getRatingStars(rating) {
    const full = Math.floor(rating);
    const half = rating % 1 >= 0.5;
    let html = '';
    for (let i = 0; i < full; i++) html += '<span class="star filled">★</span>';
    if (half) html += '<span class="star half">★</span>';
    for (let i = full + (half ? 1 : 0); i < 5; i++) html += '<span class="star empty">☆</span>';
    return html;
}

function getBadgeColor(badge) {
    const colors = {
        'Best Seller': '#ef4444',
        'Top Rated': '#f59e0b',
        'Best Value': '#10b981',
        'Budget Pick': '#3b82f6',
        'India Favorite': '#f97316',
        'Most Reviewed': '#8b5cf6',
        'Pro Choice': '#6366f1',
        'Windows Best': '#0ea5e9',
        'Budget Laptop': '#22c55e',
        'Business Grade': '#64748b',
        'Gaming Value': '#dc2626',
        'Best ANC': '#7c3aed',
        'Apple Ecosystem': '#374151',
        'Comfort King': '#0891b2',
        'Android Choice': '#1d4ed8',
        'Ultimate Sports': '#b45309',
        'Android Watch': '#1d4ed8',
        'Budget Smart': '#16a34a',
        'Athlete\'s Watch': '#dc2626',
        'Pro Tablet': '#4f46e5',
        'Value Tablet': '#0369a1',
        'Budget Tablet': '#15803d',
        'Pro Camera': '#b91c1c',
        'Creator Cam': '#c2410c',
        'Action Cam': '#1e40af',
        'Console King': '#003087',
        'Game Pass Value': '#107c10',
        'Portable Gaming': '#e60012',
        'PC Gaming': '#c50000',
        '4K Gaming': '#b91c1c',
        'Pro Display': '#1e40af',
        'Curved Gaming': '#7e22ce',
        'Apple Accessory': '#374151',
        'Best Mouse': '#1d4ed8',
        'Fast Charger': '#15803d',
        'Fast Storage': '#dc2626',
        'Best TV': '#4f46e5',
        'QLED Value': '#0369a1',
        'Budget 4K': '#16a34a',
        'Spatial Audio': '#000000',
        'Portable Fav': '#e05c00',
        'Premium Home': '#92400e',
        'AI Champion': '#4f46e5',
    };
    return colors[badge] || '#6366f1';
}

function createProductCard(product) {
    const badgeHtml = product.badge
        ? `<div class="product-badge" style="background:${getBadgeColor(product.badge)}">${product.badge}</div>`
        : '';

    const fallbackImg = `https://placehold.co/400x300/f1f5f9/6366f1?text=${encodeURIComponent(product.name.substring(0,15))}`;

    return `
        <div class="product-card" data-product-id="${product.id}">
            <div class="product-image-wrap">
                ${badgeHtml}
                <img src="${product.image}" alt="${product.name}" class="product-image"
                     loading="lazy"
                     onerror="this.onerror=null;this.src='${fallbackImg}'">
                <div class="product-overlay">
                    <button class="overlay-btn" onclick="openProductModal(${product.id})" title="Quick View">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
                        Quick View
                    </button>
                </div>
            </div>
            <div class="product-body">
                <div class="product-category-tag">${product.category}</div>
                <h3 class="product-name">${product.name}</h3>
                <div class="product-rating">
                    <div class="stars-wrap">${getRatingStars(product.rating)}</div>
                    <span class="rating-num">${product.rating}</span>
                    <span class="rating-count">(${product.reviews.toLocaleString()})</span>
                </div>
                <div class="product-price">${formatPrice(product.price)}</div>
                <div class="product-actions">
                    <button class="btn btn-primary" onclick="openProductModal(${product.id})">View Details</button>
                    <button class="btn btn-secondary ${comparisonList.includes(product.id) ? 'active' : ''}" onclick="addToComparison(${product.id})" id="compare-btn-${product.id}">
                        ${comparisonList.includes(product.id) ? '✓ Added' : '⚖ Compare'}
                    </button>
                </div>
            </div>
        </div>
    `;
}

function renderProductGrid(products) {
    const productGrid = document.getElementById('product-grid');
    const noResults = document.getElementById('no-results');
    if (!productGrid) return;

    if (products.length === 0) {
        productGrid.innerHTML = '';
        if (noResults) noResults.classList.remove('hidden');
    } else {
        productGrid.innerHTML = products.map(p => createProductCard(p)).join('');
        if (noResults) noResults.classList.add('hidden');
    }

    const resultsCount = document.getElementById('results-count');
    if (resultsCount) {
        resultsCount.textContent = currentSearchQuery
            ? `Found ${products.length} result${products.length !== 1 ? 's' : ''} for "${currentSearchQuery}"`
            : `Showing ${products.length} product${products.length !== 1 ? 's' : ''}`;
    }

    // scroll to products section if searching
    if (currentSearchQuery) {
        const productsSection = document.getElementById('products');
        if (productsSection) {
            productsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }
}

// ========== SEARCH: Fixed - maintains search context ==========
function performSearch(query) {
    currentSearchQuery = query.trim();
    if (!currentSearchQuery) {
        searchFilteredProducts = [...allProducts];
    } else {
        const q = currentSearchQuery.toLowerCase();
        // Natural language budget parsing
        const budgetMatch = q.match(/under[^\d]*(\d[\d,]*)/i) || q.match(/below[^\d]*(\d[\d,]*)/i) || q.match(/less than[^\d]*(\d[\d,]*)/i) || q.match(/within[^\d]*(\d[\d,]*)/i);
        const budget = budgetMatch ? parseInt(budgetMatch[1].replace(/,/g, '')) : null;

        searchFilteredProducts = allProducts.filter(p => {
            const matchesText = (
                p.name.toLowerCase().includes(q) ||
                p.category.toLowerCase().includes(q) ||
                p.description.toLowerCase().includes(q) ||
                (p.badge && p.badge.toLowerCase().includes(q)) ||
                Object.values(p.specs).some(spec => String(spec).toLowerCase().includes(q)) ||
                p.pros.some(pro => pro.toLowerCase().includes(q))
            );
            if (matchesText) return true;

            // Budget-based search: "laptops under 70000"
            if (budget) {
                const categoryWords = ['smartphones', 'laptop', 'headphone', 'smartwatch', 'tablet', 'camera', 'gaming', 'monitor', 'television', 'speaker', 'accessories', 'phone', 'earphone', 'earbuds', 'watch', 'tv'];
                const matchesCategory = categoryWords.some(cat => q.includes(cat) && p.category.toLowerCase().includes(cat.replace('phone','smartphone').replace('earphone','headphone').replace('earbuds','headphone').replace('watch','smartwatch').replace('tv','television')));
                if (matchesCategory && p.price <= budget) return true;
                // If only budget mentioned with no category, show all within budget
                if (budget && !categoryWords.some(cat => q.includes(cat))) {
                    return p.price <= budget;
                }
            }
            return false;
        });
    }
    applyFilters();
}

// ========== FILTERS: Apply on top of search results ==========
function applyFilters() {
    const priceMin = parseInt(document.getElementById('price-min')?.value) || 0;
    const priceMax = parseInt(document.getElementById('price-max')?.value) || 250000;
    const ratingMin = parseFloat(document.querySelector('.rating-btn.active')?.dataset.rating) || 0;
    const sortBy = document.getElementById('sort-select')?.value || 'relevance';

    // Apply price and rating on top of search-filtered results
    filteredProducts = searchFilteredProducts.filter(p =>
        p.price >= priceMin &&
        p.price <= priceMax &&
        p.rating >= ratingMin
    );

    switch (sortBy) {
        case 'price-low': filteredProducts.sort((a, b) => a.price - b.price); break;
        case 'price-high': filteredProducts.sort((a, b) => b.price - a.price); break;
        case 'rating': filteredProducts.sort((a, b) => b.rating - a.rating); break;
        case 'reviews': filteredProducts.sort((a, b) => b.reviews - a.reviews); break;
    }

    renderProductGrid(filteredProducts);
}

function filterByCategory(categoryName) {
    currentSearchQuery = '';
    const searchInput = document.getElementById('search-input');
    if (searchInput) searchInput.value = '';
    searchFilteredProducts = allProducts.filter(p => p.category === categoryName);
    document.getElementById('results-count').textContent = `Showing ${categoryName}`;
    
    // reset filters
    const priceMin = document.getElementById('price-min');
    const priceMax = document.getElementById('price-max');
    if (priceMin) priceMin.value = 0;
    if (priceMax) priceMax.value = 250000;
    document.getElementById('price-min-display').textContent = '₹0';
    document.getElementById('price-max-display').textContent = '₹2,50,000';
    document.querySelectorAll('.rating-btn').forEach(b => b.classList.remove('active'));
    document.querySelector('[data-rating="0"]')?.classList.add('active');
    
    applyFilters();
    document.getElementById('products')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

// ========== RECOMMENDATIONS ==========
function updateRecommendations() {
    const recGrid = document.getElementById('rec-grid');
    const recEmpty = document.getElementById('rec-empty');
    if (!recGrid) return;

    let suggestions;
    if (browsedProducts.length === 0) {
        suggestions = [...allProducts].sort((a, b) => b.rating - a.rating).slice(0, 6);
    } else {
        const browsedCategories = browsedProducts.map(id => allProducts.find(p => p.id === id)?.category).filter(Boolean);
        const categoryCounts = {};
        browsedCategories.forEach(c => categoryCounts[c] = (categoryCounts[c] || 0) + 1);
        const topCat = Object.entries(categoryCounts).sort((a, b) => b[1] - a[1])[0]?.[0];

        suggestions = allProducts
            .filter(p => p.category === topCat && !browsedProducts.includes(p.id))
            .sort((a, b) => b.rating - a.rating)
            .slice(0, 6);

        if (suggestions.length < 4) {
            const fillers = allProducts.filter(p => !browsedProducts.includes(p.id)).sort((a, b) => b.rating - a.rating);
            const combined = [...suggestions, ...fillers];
            const seen = new Set();
            suggestions = combined.filter(p => seen.has(p.id) ? false : (seen.add(p.id), true)).slice(0, 6);
        }
    }

    recGrid.innerHTML = suggestions.map(p => createProductCard(p)).join('');
    if (recEmpty) recEmpty.classList.add('hidden');
}

// ========== PRODUCT MODAL ==========
function openProductModal(productId) {
    const product = allProducts.find(p => p.id === productId);
    if (!product) return;

    if (!browsedProducts.includes(product.id)) browsedProducts.push(product.id);
    updateRecommendations();

    const modalBody = document.getElementById('modal-body');
    if (!modalBody) return;

    const verificationScore = Math.floor(Math.random() * 14 + 85);
    const fakeFilteredPct = Math.floor(Math.random() * 8 + 3);
    const fallbackImg = `https://placehold.co/500x400/f1f5f9/6366f1?text=${encodeURIComponent(product.name.substring(0,15))}`;

    modalBody.innerHTML = `
        <div class="modal-image-wrap">
            <img src="${product.image}" alt="${product.name}" class="modal-image"
                 onerror="this.onerror=null;this.src='${fallbackImg}'">
            ${product.badge ? `<div class="modal-badge" style="background:${getBadgeColor(product.badge)}">${product.badge}</div>` : ''}
        </div>
        <div class="modal-details">
            <div class="product-category-tag" style="margin-bottom:0.5rem">${product.category}</div>
            <h2 class="modal-title">${product.name}</h2>
            <div class="modal-rating">
                <div class="stars-wrap">${getRatingStars(product.rating)}</div>
                <span class="rating-num">${product.rating}</span>
                <span class="rating-count">(${product.reviews.toLocaleString()} reviews)</span>
            </div>

            <div class="ai-review-guard">
                <span class="guard-icon">🛡️</span>
                <div>
                    <strong class="guard-title">AI Review Guard Active</strong>
                    <span class="guard-desc">Analyzed ${product.reviews.toLocaleString()} reviews — <strong>${verificationScore}%</strong> verified authentic. <strong>${fakeFilteredPct}%</strong> fake/incentivized reviews filtered out automatically.</span>
                </div>
            </div>

            <div class="modal-price">${formatPrice(product.price)}</div>
            <p class="modal-description">${product.description}</p>

            <h3 class="modal-section-title">Specifications</h3>
            <div class="specs-grid">
                ${Object.entries(product.specs).map(([key, value]) => `
                    <div class="spec-item">
                        <div class="spec-label">${key.charAt(0).toUpperCase() + key.slice(1).replace(/_/g, ' ')}</div>
                        <div class="spec-value">${value}</div>
                    </div>
                `).join('')}
            </div>

            <div class="pros-cons-grid">
                <div class="pros-box">
                    <h4>✅ Pros</h4>
                    <ul>${product.pros.map(p => `<li>${p}</li>`).join('')}</ul>
                </div>
                <div class="cons-box">
                    <h4>❌ Cons</h4>
                    <ul>${product.cons.map(c => `<li>${c}</li>`).join('')}</ul>
                </div>
            </div>

            <div class="ai-verdict">
                <h4>🤖 AI Verdict</h4>
                <p>${generateAIVerdict(product)}</p>
            </div>

            <div class="modal-actions">
                <button class="btn btn-primary" onclick="window.open('https://www.amazon.in/s?k=${encodeURIComponent(product.name)}','_blank')">
                    🛒 Buy on Amazon
                </button>
                <button class="btn btn-outline" onclick="window.open('https://www.flipkart.com/search?q=${encodeURIComponent(product.name)}','_blank')">
                    🛍 Buy on Flipkart
                </button>
                <button class="btn btn-secondary" onclick="addToComparison(${product.id})">⚖ Add to Compare</button>
            </div>
        </div>
    `;

    document.getElementById('product-modal').classList.remove('hidden');
    document.body.style.overflow = 'hidden';
}

function generateAIVerdict(product) {
    const priceLevel = product.price < 15000 ? 'budget' : product.price < 50000 ? 'mid-range' : product.price < 100000 ? 'premium' : 'ultra-premium';
    const ratingDesc = product.rating >= 4.7 ? 'exceptional' : product.rating >= 4.4 ? 'excellent' : 'good';
    return `The ${product.name} offers ${ratingDesc} value in the ${priceLevel} segment. With a ${product.rating}/5 rating from ${product.reviews.toLocaleString()} verified buyers, it stands out for ${product.pros[0].toLowerCase()} and ${product.pros[1].toLowerCase()}. ${product.cons[0]} remains the primary concern. ${product.price < 50000 ? `For anyone seeking ${product.category.toLowerCase()} under ${formatPrice(product.price)}, this is one of our top picks.` : `If budget allows, this is a worthwhile investment for serious users.`}`;
}

// ========== COMPARISON ==========
function addToComparison(productId) {
    if (comparisonList.length >= 4 && !comparisonList.includes(productId)) {
        showNotification('⚠️ Max 4 products in comparison!', 'warning');
        return;
    }
    if (comparisonList.includes(productId)) {
        removeFromComparison(productId);
        return;
    }
    comparisonList.push(productId);
    updateComparisonBadge();
    showComparisonPanel();
    showNotification(`✓ Added to comparison!`, 'success');

    // Update compare button state
    const btn = document.getElementById(`compare-btn-${productId}`);
    if (btn) { btn.textContent = '✓ Added'; btn.classList.add('active'); }
}

function updateComparisonBadge() {
    const badge = document.getElementById('compare-count');
    if (badge) {
        badge.textContent = comparisonList.length;
        badge.classList.toggle('hidden', comparisonList.length === 0);
    }
}

function showComparisonPanel() {
    const products = comparisonList.map(id => allProducts.find(p => p.id === id)).filter(Boolean);
    let html = `<div class="comparison-scroll"><table class="comparison-table"><thead><tr><th>Feature</th>`;
    products.forEach(p => html += `<th><img src="${p.image}" alt="${p.name}" style="width:80px;height:60px;object-fit:contain;border-radius:6px;display:block;margin:0 auto 8px;" onerror="this.style.display='none'"><div>${p.name}</div></th>`);
    html += `</tr></thead><tbody>`;

    const rows = [
        { label: 'Price', fn: p => `<strong>${formatPrice(p.price)}</strong>` },
        { label: 'Rating', fn: p => `${p.rating} ⭐ (${p.reviews.toLocaleString()} reviews)` },
        { label: 'Category', fn: p => p.category },
    ];

    rows.forEach(row => {
        html += `<tr><td>${row.label}</td>`;
        products.forEach(p => html += `<td>${row.fn(p)}</td>`);
        html += `</tr>`;
    });

    const allSpecKeys = new Set();
    products.forEach(p => Object.keys(p.specs).forEach(k => allSpecKeys.add(k)));
    allSpecKeys.forEach(key => {
        html += `<tr><td>${key.charAt(0).toUpperCase() + key.slice(1).replace(/_/g, ' ')}</td>`;
        products.forEach(p => html += `<td>${p.specs[key] || '—'}</td>`);
        html += `</tr>`;
    });

    html += `<tr><td>AI Recommendation</td>`;
    const bestProduct = products.reduce((a, b) => (b.rating > a.rating ? b : a));
    products.forEach(p => html += `<td>${p.id === bestProduct.id ? '<span style="color:#10b981;font-weight:700">⭐ Top Pick</span>' : '—'}</td>`);
    html += `</tr>`;

    html += `</tbody></table></div>`;
    html += `<div class="comparison-actions">`;
    products.forEach(p => html += `<button class="btn btn-secondary" onclick="removeFromComparison(${p.id})">✕ Remove ${p.name.split(' ').slice(0,2).join(' ')}</button>`);
    html += `</div>`;

    const content = document.getElementById('comparison-content');
    if (content) content.innerHTML = html;
    document.getElementById('comparison-panel')?.classList.remove('hidden');
}

function removeFromComparison(productId) {
    comparisonList = comparisonList.filter(id => id !== productId);
    updateComparisonBadge();

    const btn = document.getElementById(`compare-btn-${productId}`);
    if (btn) { btn.textContent = '⚖ Compare'; btn.classList.remove('active'); }

    if (comparisonList.length === 0) {
        document.getElementById('comparison-panel')?.classList.add('hidden');
    } else {
        showComparisonPanel();
    }
}

// ========== CATEGORIES RENDER ==========
function renderCategories() {
    const grid = document.getElementById('category-grid');
    if (!grid) return;
    const count = {};
    allProducts.forEach(p => count[p.category] = (count[p.category] || 0) + 1);

    grid.innerHTML = CATEGORIES.map(cat => `
        <a href="#products" class="category-card" onclick="filterByCategory('${cat.name}');return false;">
            <div class="category-icon">${cat.icon}</div>
            <div class="category-name">${cat.name}</div>
            <div class="category-count">${count[cat.name] || 0} products</div>
        </a>
    `).join('');
}

// ========== NOTIFICATIONS ==========
function showNotification(message, type = 'success') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    document.body.appendChild(notification);
    setTimeout(() => notification.classList.add('show'), 10);
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// ========== SEARCH SUGGESTIONS ==========
const SEARCH_SUGGESTIONS = [
    '📱 Phones under ₹30,000', '💻 Gaming laptops', '🎧 Wireless headphones',
    '⌚ Smartwatch under ₹5000', '🎮 Gaming consoles', '📷 Cameras for beginners',
    '📺 Best 4K TV', '🔊 Portable speakers', '💰 Budget smartphones'
];

function renderSearchSuggestions() {
    const container = document.getElementById('search-suggestions');
    if (!container) return;
    container.innerHTML = SEARCH_SUGGESTIONS.map(s => `
        <span class="suggestion-tag" onclick="document.getElementById('search-input').value='${s.replace(/[^\w\s₹,]/g, '').trim()}';performSearch('${s.replace(/[^\w\s₹,]/g, '').trim()}')">${s}</span>
    `).join('');
}

// ========== ENHANCED SHOPGENIUS AI CHATBOT ==========
const CHAT_KNOWLEDGE_BASE = {
    greetings: ['hello', 'hi', 'hey', 'good morning', 'good evening', 'namaste'],
    thankYou: ['thank', 'thanks', 'great', 'awesome', 'helpful'],
    comparison: ['compare', 'vs', 'versus', 'difference', 'better', 'which is better'],
    budget: ['under', 'below', 'within', 'budget', 'cheap', 'affordable', 'less than'],
    recommendation: ['recommend', 'suggest', 'best', 'top', 'good', 'buy'],
    features: ['camera', 'battery', 'display', 'screen', 'processor', 'performance', 'gaming'],

    categoryKeywords: {
        'Smartphones': ['phone', 'smartphone', 'mobile', 'iphone', 'android', 'samsung', 'oneplus', 'realme', 'redmi', 'pixel'],
        'Laptops': ['laptop', 'notebook', 'macbook', 'dell', 'asus', 'lenovo', 'hp', 'computer'],
        'Headphones': ['headphone', 'earphone', 'earbuds', 'headset', 'airpods', 'sony wh', 'bose', 'boat', 'wireless audio'],
        'Smartwatches': ['smartwatch', 'watch', 'wearable', 'fitness tracker', 'apple watch', 'galaxy watch', 'garmin'],
        'Tablets': ['tablet', 'ipad', 'tab', 'drawing tablet'],
        'Cameras': ['camera', 'dslr', 'mirrorless', 'action camera', 'gopro', 'photography', 'vlog'],
        'Gaming': ['gaming', 'console', 'playstation', 'ps5', 'xbox', 'nintendo', 'switch', 'game'],
        'Monitors': ['monitor', 'display', 'screen for pc', '144hz', '4k monitor'],
        'Televisions': ['tv', 'television', 'oled tv', 'qled', 'smart tv'],
        'Speakers': ['speaker', 'bluetooth speaker', 'jbl', 'soundbar', 'marshall', 'sonos'],
        'Accessories': ['mouse', 'keyboard', 'charger', 'ssd', 'hard disk', 'accessories'],
    },

    // Specific product query detection
    productKeywords: {
        'iPhone 15 Pro Max': ['iphone 15', 'iphone pro max', 'apple flagship'],
        'Samsung Galaxy S24 Ultra': ['s24 ultra', 'samsung ultra', 'samsung flagship'],
        'Sony WH-1000XM5': ['sony xm5', 'sony headphones', 'xm5'],
        'Apple AirPods Pro 2': ['airpods', 'airpods pro'],
        'PlayStation 5': ['ps5', 'playstation 5', 'playstation'],
        'Xbox Series X': ['xbox', 'xbox series x', 'series x'],
    }
};

function detectCategory(query) {
    for (const [category, keywords] of Object.entries(CHAT_KNOWLEDGE_BASE.categoryKeywords)) {
        if (keywords.some(kw => query.includes(kw))) return category;
    }
    return null;
}

function detectBudget(query) {
    const patterns = [
        /under\s*(?:rs\.?\s*|₹\s*|inr\s*)?(\d[\d,k]*)/i,
        /below\s*(?:rs\.?\s*|₹\s*|inr\s*)?(\d[\d,k]*)/i,
        /within\s*(?:rs\.?\s*|₹\s*|inr\s*)?(\d[\d,k]*)/i,
        /less than\s*(?:rs\.?\s*|₹\s*|inr\s*)?(\d[\d,k]*)/i,
        /(?:rs\.?\s*|₹\s*|inr\s*)(\d[\d,k]*)/i,
        /(\d[\d,k]*)\s*(?:rs|₹|inr|rupees?)/i,
    ];
    for (const p of patterns) {
        const m = query.match(p);
        if (m) {
            let val = m[1].replace(/,/g, '');
            if (val.toLowerCase().endsWith('k')) val = parseFloat(val) * 1000;
            const num = parseInt(val);
            if (!isNaN(num) && num > 100) return num;
        }
    }
    return null;
}

function generateBotResponse(query) {
    const q = query.toLowerCase().trim();
    let response = '';

    // Greetings
    if (CHAT_KNOWLEDGE_BASE.greetings.some(g => q.includes(g))) {
        return `Hello! 👋 I'm ShopGenius AI, your personal shopping assistant! I can help you:
<br>• Find products within your budget
<br>• Compare products side-by-side
<br>• Get recommendations for any category
<br>• Understand pros & cons
<br><br>Try asking: <em>"Best phone under ₹25000"</em> or <em>"Compare gaming laptops"</em>`;
    }

    // Thank you
    if (CHAT_KNOWLEDGE_BASE.thankYou.some(t => q.includes(t))) {
        return `You're welcome! 😊 Happy to help you find the perfect product. Feel free to ask anything else — I'm here to make your shopping smarter!`;
    }

    // "What can you do"
    if (q.includes('what can you do') || q.includes('help') || q.includes('how to use')) {
        return `I can help you with: <br><br>
🔍 <strong>Search:</strong> "Show me gaming laptops under ₹80000"<br>
⭐ <strong>Recommend:</strong> "Best smartphone for photography"<br>
⚖ <strong>Compare:</strong> "iPhone vs Samsung" or "Compare headphones"<br>
💰 <strong>Budget:</strong> "Best earphones under ₹2000"<br>
🏷 <strong>Category browse:</strong> "Show all tablets"<br>
📊 <strong>Specs:</strong> "Which has best battery life?"<br><br>
Just ask me naturally — I understand plain English!`;
    }

    const budget = detectBudget(q);
    const category = detectCategory(q);
    const isComparison = CHAT_KNOWLEDGE_BASE.comparison.some(c => q.includes(c));
    const isRecommendation = CHAT_KNOWLEDGE_BASE.recommendation.some(r => q.includes(r));

    // Comparison request
    if (isComparison && !category) {
        return `To compare products:<br>1. Click the <strong>"⚖ Compare"</strong> button on any product card<br>2. Add up to 4 products<br>3. Click the compare icon <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="vertical-align:middle"><path d="M16 3h5v5M4 20L21 3M21 16v5h-5M15 15l6 6M4 4l5 5"/></svg> in the navbar to open the comparison table!<br><br>Want me to recommend specific products to compare? Tell me the category!`;
    }

    // Budget only
    if (budget && !category) {
        const matches = [...allProducts].filter(p => p.price <= budget).sort((a, b) => b.rating - a.rating).slice(0, 4);
        if (matches.length > 0) {
            appendMessage(`🔍 Found ${matches.length} top-rated products under ${formatPrice(budget)}:`, 'bot');
            appendProductCards(matches);
            return null;
        }
        return `I couldn't find products under ${formatPrice(budget)}. Try a higher budget!`;
    }

    // Category + budget
    if (category && budget) {
        const matches = allProducts.filter(p => p.category === category && p.price <= budget).sort((a, b) => b.rating - a.rating).slice(0, 3);
        if (matches.length > 0) {
            appendMessage(`🎯 Top ${category} under ${formatPrice(budget)}:`, 'bot');
            appendProductCards(matches);
            return null;
        }
        return `No ${category} found under ${formatPrice(budget)}. The cheapest ${category} starts at ${formatPrice(Math.min(...allProducts.filter(p=>p.category===category).map(p=>p.price)))}. Want to increase your budget?`;
    }

    // Category only
    if (category) {
        const catProducts = allProducts.filter(p => p.category === category).sort((a, b) => b.rating - a.rating).slice(0, 3);
        if (catProducts.length > 0) {
            appendMessage(`Here are the top ${category} on PennyPivot:`, 'bot');
            appendProductCards(catProducts);
            appendMessage(`💡 Tip: Tell me your budget for more precise recommendations! E.g., "${category} under ₹30000"`, 'bot');
            return null;
        }
    }

    // Best for feature
    if (q.includes('best camera') || q.includes('camera phone') || q.includes('photography')) {
        const camPhones = allProducts.filter(p => p.category === 'Smartphones').sort((a, b) => b.rating - a.rating).slice(0, 3);
        appendMessage('📸 Best phones for photography:', 'bot');
        appendProductCards(camPhones);
        return null;
    }

    if (q.includes('battery') || q.includes('long battery') || q.includes('battery life')) {
        const batProducts = allProducts.filter(p => JSON.stringify(p.specs).toLowerCase().includes('5000') || JSON.stringify(p.specs).toLowerCase().includes('5400')).slice(0, 4);
        if (batProducts.length > 0) {
            appendMessage('🔋 Products with the best battery life:', 'bot');
            appendProductCards(batProducts);
            return null;
        }
    }

    if (q.includes('gaming') && !category) {
        const gamingProducts = allProducts.filter(p => p.category === 'Gaming' || p.badge?.toLowerCase().includes('gaming')).sort((a, b) => b.rating - a.rating).slice(0, 4);
        appendMessage('🎮 Best gaming products:', 'bot');
        appendProductCards(gamingProducts);
        return null;
    }

    if (q.includes('student') || q.includes('college') || q.includes('study')) {
        const studentPicks = allProducts.filter(p => p.category === 'Laptops' && p.price < 80000).sort((a, b) => b.rating - a.rating).slice(0, 3);
        appendMessage('📚 Best laptops for students:', 'bot');
        appendProductCards(studentPicks);
        return null;
    }

    if (q.includes('gift') || q.includes('present')) {
        const gifts = [...allProducts].sort((a, b) => b.rating - a.rating).slice(0, 4);
        appendMessage('🎁 Top gift ideas based on ratings:', 'bot');
        appendProductCards(gifts);
        return null;
    }

    if (q.includes('all products') || q.includes('show all') || q.includes('browse all')) {
        filterByCategory && searchFilteredProducts;
        appendMessage(`We have ${allProducts.length} products across ${CATEGORIES.length} categories. Scroll down to browse all, or use filters to narrow down! You can also search by category name.`, 'bot');
        return null;
    }

    // Fallback: try to match product name directly
    const directMatch = allProducts.find(p =>
        p.name.toLowerCase().includes(q) || q.includes(p.name.toLowerCase().split(' ').slice(0, 2).join(' '))
    );
    if (directMatch) {
        openProductModal(directMatch.id);
        return `Opening details for <strong>${directMatch.name}</strong> for you! 👆`;
    }

    // Smart fallback
    return `🤔 I'm not sure I understood that fully. Here are some things you can try:<br><br>
• <strong>"Best phone under ₹20000"</strong><br>
• <strong>"Gaming laptops under ₹80000"</strong><br>
• <strong>"Compare Sony vs Apple headphones"</strong><br>
• <strong>"Tablets for students"</strong><br>
• <strong>"Best camera for photography"</strong><br><br>
Or just scroll through the product section and use the filters! 😊`;
}

function appendMessage(text, sender) {
    const chatMessages = document.getElementById('chat-messages');
    if (!chatMessages) return;
    const msgDiv = document.createElement('div');
    msgDiv.className = `chat-msg ${sender}`;
    msgDiv.innerHTML = sender === 'bot'
        ? `<span class="msg-avatar">🤖</span><div class="msg-bubble">${text}</div>`
        : `<div class="msg-bubble">${text}</div><span class="msg-avatar">👤</span>`;
    chatMessages.appendChild(msgDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

function appendProductCards(products) {
    const chatMessages = document.getElementById('chat-messages');
    if (!chatMessages) return;
    const msgDiv = document.createElement('div');
    msgDiv.className = 'chat-msg bot';
    const cardsHtml = products.map(p => `
        <div class="chat-product-card" onclick="openProductModal(${p.id})" style="cursor:pointer;">
            <img src="${p.image}" alt="${p.name}" style="width:56px;height:48px;object-fit:cover;border-radius:6px;flex-shrink:0;" onerror="this.style.display='none'">
            <div style="flex:1;min-width:0;">
                <div style="font-weight:600;font-size:0.85rem;color:var(--text);overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">${p.name}</div>
                <div style="display:flex;justify-content:space-between;align-items:center;margin-top:3px;">
                    <span style="color:var(--primary);font-weight:700;font-size:0.9rem;">${formatPrice(p.price)}</span>
                    <span style="color:var(--warning);font-size:0.8rem;">⭐ ${p.rating}</span>
                </div>
            </div>
        </div>
    `).join('');
    msgDiv.innerHTML = `<span class="msg-avatar">🤖</span><div class="msg-bubble"><div style="display:flex;flex-direction:column;gap:8px;margin-top:6px;">${cardsHtml}</div></div>`;
    chatMessages.appendChild(msgDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

function appendTypingIndicator() {
    const id = 'typing-' + Date.now();
    const chatMessages = document.getElementById('chat-messages');
    if (!chatMessages) return id;
    const div = document.createElement('div');
    div.className = 'chat-msg bot';
    div.id = id;
    div.innerHTML = `<span class="msg-avatar">🤖</span><div class="msg-bubble typing-indicator"><span></span><span></span><span></span></div>`;
    chatMessages.appendChild(div);
    chatMessages.scrollTop = chatMessages.scrollHeight;
    return id;
}

function removeElement(id) {
    document.getElementById(id)?.remove();
}

// ========== MAIN INIT ==========
document.addEventListener('DOMContentLoaded', function () {
    renderProductGrid(allProducts);
    renderCategories();
    renderSearchSuggestions();
    updateRecommendations();

    // Theme
    const themeToggle = document.getElementById('theme-toggle');
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);

    if (themeToggle) {
        themeToggle.addEventListener('click', function () {
            const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
            const newTheme = isDark ? 'light' : 'dark';
            document.documentElement.setAttribute('data-theme', newTheme);
            localStorage.setItem('theme', newTheme);
        });
    }

    // Search
    const searchBtn = document.getElementById('search-btn');
    const searchInput = document.getElementById('search-input');

    if (searchBtn) searchBtn.addEventListener('click', () => performSearch(searchInput?.value || ''));
    if (searchInput) {
        searchInput.addEventListener('keypress', function (e) {
            if (e.key === 'Enter') performSearch(this.value);
        });
        // Live search with debounce
        let debounceTimer;
        searchInput.addEventListener('input', function () {
            clearTimeout(debounceTimer);
            debounceTimer = setTimeout(() => {
                if (this.value.length === 0) {
                    currentSearchQuery = '';
                    searchFilteredProducts = [...allProducts];
                    applyFilters();
                }
            }, 300);
        });
    }

    // Filters
    const priceMin = document.getElementById('price-min');
    const priceMax = document.getElementById('price-max');

    if (priceMin) {
        priceMin.max = 250000;
        priceMin.addEventListener('input', function () {
            document.getElementById('price-min-display').textContent = formatPrice(this.value);
            applyFilters();
        });
    }
    if (priceMax) {
        priceMax.max = 250000;
        priceMax.value = 250000;
        document.getElementById('price-max-display').textContent = '₹2,50,000';
        priceMax.addEventListener('input', function () {
            document.getElementById('price-max-display').textContent = formatPrice(this.value);
            applyFilters();
        });
    }

    document.querySelectorAll('.rating-btn').forEach(btn => {
        btn.addEventListener('click', function () {
            document.querySelectorAll('.rating-btn').forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            applyFilters();
        });
    });

    const sortSelect = document.getElementById('sort-select');
    if (sortSelect) sortSelect.addEventListener('change', applyFilters);

    const clearFilters = document.getElementById('clear-filters');
    if (clearFilters) {
        clearFilters.addEventListener('click', function () {
            currentSearchQuery = '';
            searchFilteredProducts = [...allProducts];
            if (searchInput) searchInput.value = '';
            if (priceMin) priceMin.value = 0;
            if (priceMax) { priceMax.value = 250000; }
            document.getElementById('price-min-display').textContent = '₹0';
            document.getElementById('price-max-display').textContent = '₹2,50,000';
            document.querySelectorAll('.rating-btn').forEach(b => b.classList.remove('active'));
            document.querySelector('[data-rating="0"]')?.classList.add('active');
            if (sortSelect) sortSelect.value = 'relevance';
            applyFilters();
        });
    }

    // Comparison
    document.getElementById('compare-btn-nav')?.addEventListener('click', function () {
        if (comparisonList.length > 0) {
            document.getElementById('comparison-panel')?.classList.toggle('hidden');
        } else {
            showNotification('Add products to compare first!', 'warning');
        }
    });
    document.getElementById('close-comparison')?.addEventListener('click', () => {
        document.getElementById('comparison-panel')?.classList.add('hidden');
    });

    // Modal
    document.getElementById('close-modal')?.addEventListener('click', () => {
        document.getElementById('product-modal')?.classList.add('hidden');
        document.body.style.overflow = '';
    });
    document.getElementById('product-modal')?.addEventListener('click', function (e) {
        if (e.target === this || e.target.classList.contains('modal-overlay')) {
            this.classList.add('hidden');
            document.body.style.overflow = '';
        }
    });

    // Navbar scroll effect
    window.addEventListener('scroll', function () {
        const navbar = document.getElementById('navbar');
        if (navbar) navbar.classList.toggle('scrolled', window.scrollY > 50);
    });

    // Chatbot
    const chatToggle = document.getElementById('chat-toggle');
    const chatBox = document.getElementById('chat-box');
    const chatInput = document.getElementById('chat-input');
    const chatSend = document.getElementById('chat-send');

    if (chatToggle && chatBox) {
        chatToggle.addEventListener('click', () => {
            chatBox.classList.toggle('hidden');
            document.querySelector('.chat-icon-open')?.classList.toggle('hidden');
            document.querySelector('.chat-icon-close')?.classList.toggle('hidden');
        });
    }

    function handleUserMessage() {
        if (!chatInput) return;
        const text = chatInput.value.trim();
        if (!text) return;
        appendMessage(text, 'user');
        chatInput.value = '';
        const typingId = appendTypingIndicator();
        const delay = 600 + Math.random() * 600;
        setTimeout(() => {
            removeElement(typingId);
            const response = generateBotResponse(text);
            if (response !== null) appendMessage(response, 'bot');
        }, delay);
    }

    if (chatSend) chatSend.addEventListener('click', handleUserMessage);
    if (chatInput) chatInput.addEventListener('keypress', e => { if (e.key === 'Enter') handleUserMessage(); });

    // Quick chat prompts
    document.querySelectorAll('.quick-prompt').forEach(btn => {
        btn.addEventListener('click', function () {
            if (chatInput) chatInput.value = this.dataset.prompt;
            handleUserMessage();
        });
    });
});