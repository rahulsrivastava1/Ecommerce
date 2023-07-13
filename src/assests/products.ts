export type LaptopType = {
  id: string;
  name: string;
  price: number;
  rating: number;
  brand: string;
  desc: string;
  image: string;
  available: boolean;
};

export type MouseType = {
  id: string;
  name: string;
  price: number;
  rating: number;
  brand: string;
  desc: string;
  image: string;
  available: boolean;
};

export type electronicsHomeProductsType = {
  laptop: LaptopType[];
  mouse: MouseType[];
  [key: string]: LaptopType[] | MouseType[];
};

export const electronicsHomeProducts = {
  laptop: [
    {
      id: "l1",
      name: "MSI Delta",
      price: 92900,
      rating: 4,
      brand: "MSI",
      desc: "MSI Delta 15 AMD Advantage Edition Ryzen 9 Octa Core 5900HX 5th Gen - (16 GB/1 TB SSD/Windows 11 Home/10 GB Graphics/AMD Radeon RX 6700M/144 Hz) A5EFK-083IN Gaming Laptop  (15.6 inch, Carbon Gray, 1.9 kg)",
      image:
        "https://rukminim1.flixcart.com/image/312/312/kxnl6kw0/computer/p/y/t/a5efk-083in-gaming-laptop-msi-original-imaga237dvrrnznh.jpeg?q=70",
      available: true,
    },
    {
      id: "l2",
      name: "Lenovo Athlon",
      price: 17900,
      rating: 1,
      brand: "Lenovo",
      desc: "Lenovo Athlon Dual Core 3050U - (4 GB/256 GB SSD/DOS) E41-55 Thin and Light Laptop  (14 Inch, Grey, 1.59 Kg)",
      image:
        "https://rukminim1.flixcart.com/image/312/312/xif0q/computer/g/w/y/-original-imagmuhrzbmzwnee.jpeg?q=70",
      available: true,
    },
    {
      id: "l3",
      name: "ASUS ROG Flow",
      price: 89690,
      rating: 3,
      brand: "ASUS",
      desc: "ASUS ROG Flow Z13 (2022) Core i5 12th Gen - (16 GB/512 GB SSD/Windows 11 Home/NA/120 Hz) GZ301ZA-LD049WS Gaming Laptop  (13.4 inch, Black, 1.12 kg, With MS Office)",
      image:
        "https://rukminim1.flixcart.com/image/312/312/l4n2oi80/computer/i/g/f/-original-imagfhpzm88zjzyc.jpeg?q=70",
      available: true,
    },
    {
      id: "l4",
      name: "ASUS ROG Strix",
      price: 159990,
      rating: 5,
      brand: "ASUS",
      desc: "ASUS ROG Strix G17 (2023) with 90WHr Battery Ryzen 9 12 Core 7845HX - (16 GB/1 TB SSD/Windows 11 Home/6 GB Graphics/NVIDIA GeForce RTX 4050/240 HZ) G713PU-LL060WS Gaming Laptop  (17.3 Inch, Eclipse Gray, 2.80 Kg, With MS Office)",
      image:
        "https://rukminim1.flixcart.com/image/312/312/xif0q/computer/9/i/w/-original-imagqkqncydutzbv.jpeg?q=70",
      available: false,
    },
    {
      id: "l5",
      name: "ASUS TUF Gaming",
      price: 131990,
      rating: 5,
      brand: "ASUS",
      desc: "ASUS TUF Gaming A15 (2023) with 90WHr Battery Ryzen 9 Octa Core 7940HS - (16 GB/1 TB SSD/Windows 11 Home/6 GB Graphics/NVIDIA GeForce RTX 4050/144 Hz) FA577XU-LP041WS Gaming Laptop  (15.6 Inch, Jaeger Gray, 2.20 Kg, With MS Office)",
      image:
        "https://rukminim1.flixcart.com/image/312/312/xif0q/computer/3/w/x/-original-imagqkqmy8nfzebj.jpeg?q=70",
      available: true,
    },
    {
      id: "l6",
      name: "Dell G7 Core i9",
      price: 99990,
      rating: 4,
      brand: "DELL",
      desc: "DELL G7 Core i9 10th Gen - (16 GB/1 TB SSD/Windows 10 Home/8 GB Graphics/NVIDIA GeForce RTX 2070/300 Hz) INS 7500 / G7 7500 Gaming Laptop  (15.6 inch, Black, 2.56 kg, With MS Office)",
      image:
        "https://rukminim1.flixcart.com/image/312/312/kf4ajrk0/computer/q/8/5/dell-na-gaming-laptop-original-imafvn3yewuackzs.jpeg?q=70",
      available: false,
    },
    {
      id: "l7",
      name: "HP 15s (2023) Ryzen",
      price: 29990,
      rating: 4,
      brand: "HP",
      desc: "HP 15s (2023) Ryzen 3 Dual Core 3250U - (8 GB/512 GB SSD/Windows 11 Home) 15s- eq1580AU Thin and Light Laptop  (15.6 Inch, Natural Silver, 1.69 Kg, With MS Office)",
      image:
        "https://rukminim2.flixcart.com/image/312/312/xif0q/computer/5/6/i/-original-imaggshd5zgfe8ev.jpeg?q=70",
      available: true,
    },
    {
      id: "l8",
      name: "MSI Bravo 15 Ryzen",
      price: 51990,
      rating: 5,
      brand: "MSI",
      desc: "MSI Bravo 15 Ryzen 7 Octa Core 5800H - (8 GB/512 GB SSD/Windows 11 Home/4 GB Graphics/AMD Radeon RX6500M/144 Hz) Bravo 15 B5ED-034IN Gaming Laptop  (15.6 inch, Black, 2.35 Kg)",
      image:
        "https://rukminim2.flixcart.com/image/312/312/xif0q/computer/b/j/7/bravo-15-b5ed-notebook-msi-original-imagz3rya2qqbhjt.jpeg?q=70",
      available: false,
    },
    {
      id: "l9",
      name: "ASUS Vivobook 15",
      price: 34990,
      rating: 3,
      brand: "ASUS",
      desc: "ASUS Vivobook 15 Core i3 11th Gen - (8 GB/512 GB SSD/Windows 11 Home) X515EA-EJ322WS | X515EA-EJ328WS Thin and Light Laptop  (15.6 Inch, Transparent Silver, 1.80 kg, With MS Office)s",
      image:
        "https://rukminim2.flixcart.com/image/312/312/xif0q/computer/q/e/z/-original-imagpxgqesgrthks.jpeg?q=70",
      available: true,
    },
    {
      id: "l10",
      name: "HP 15s (2023) Intel Core",
      price: 40990,
      rating: 3,
      brand: "HP",
      desc: "HP 15s (2023) Intel Core i3 12th Gen - (8 GB/512 GB SSD/Windows 11 Home) 15s-fy5003TU Thin and Light Laptop  (15.6 Inch, Natural Silver, 1.69 Kg, With MS Office)",
      image:
        "https://rukminim2.flixcart.com/image/312/312/xif0q/computer/d/l/q/-original-imagphhh4syr7qrg.jpeg?q=70",
      available: true,
    },
    {
      id: "l11",
      name: "DELL Inspiron Core i3",
      price: 38990,
      rating: 5,
      brand: "DELL",
      desc: "DELL Inspiron Core i3 11th Gen - (8 GB/512 GB SSD/Windows 11 Home) Inspiron 3511 Thin and Light Laptop  (38 cm, Carbon Black, 1.8 kg, With MS Office)",
      image:
        "https://rukminim2.flixcart.com/image/312/312/xif0q/computer/u/m/k/-original-imagzyfzhzcw8wvp.jpeg?q=70",
      available: true,
    },
    {
      id: "l12",
      name: "SAMSUNG Galaxy Book2",
      price: 61990,
      rating: 2,
      brand: "Samsung",
      desc: "SAMSUNG Galaxy Book2 Core i5 12th Gen - (16 GB/512 GB SSD/Windows 11 Home) NP750XED-KC3IN Thin and Light Laptop  (15.6 Inch, Silver, 1.57 kg, With MS Office)",
      image:
        "https://rukminim2.flixcart.com/image/312/312/l37mtu80/computer/o/o/w/np750xee-xb1in-thin-and-light-laptop-samsung-original-imagednvzzu7t23v.jpeg?q=70",
      available: true,
    },
    {
      id: "l13",
      name: "Lenovo Intel Celeron",
      price: 26990,
      rating: 2,
      brand: "Lenovo",
      desc: "Lenovo Intel Celeron Dual Core - (8 GB/256 GB SSD/Windows 11 Home) 15IGL05 Laptop  (15.6 Inch, Platinum Grey, 1.7 Kg, With MS Office)",
      image:
        "https://rukminim2.flixcart.com/image/312/312/xif0q/computer/z/b/z/-original-imagmmng8dppnn4v.jpeg?q=70",
      available: true,
    },
    {
      id: "l14",
      name: "APPLE 2020 Macbook Air M1",
      price: 81990,
      rating: 5,
      brand: "Apple",
      desc: "APPLE 2020 Macbook Air M1 - (8 GB/256 GB SSD/Mac OS Big Sur) MGN63HN/A  (13.3 inch, Space Grey, 1.29 kg)",
      image:
        "https://rukminim2.flixcart.com/image/312/312/kp5sya80/screen-guard/tempered-glass/o/v/n/apple-macbook-air-m1-13-3-inch-lightwings-original-imag3gh5xftgbpg3.jpeg?q=70",
      available: true,
    },
    {
      id: "l15",
      name: "Lenovo V15 Ryzen 5",
      price: 34990,
      rating: 1,
      brand: "Lenovo",
      desc: "Lenovo V15 Ryzen 5 Hexa Core 5500U - (8 GB/512 GB SSD/Windows 11 Home) V15 G2 ALC Thin and Light Laptop  (15.6 Inch, Black, 1.7 Kg)",
      image:
        "https://rukminim2.flixcart.com/image/312/312/xif0q/computer/b/d/i/-original-imagzhefhc84rmbf.jpeg?q=70",
      available: true,
    },
  ],
  mouse: [
    {
      id: "m1",
      name: "DELL MS 116-BK",
      price: 279,
      rating: 2,
      brand: "DELL",
      desc: "DELL MS 116-BK Wired Optical Mouse  (USB, Black)",
      image:
        "https://rukminim1.flixcart.com/image/612/612/k4a7c7k0/mouse/m/h/t/dell-ms116-wired-optical-mouse-3yrs-warranty-original-imafmktgxyt5ge9k.jpeg?q=70",
      available: false,
    },
    {
      id: "m2",
      name: "Portronics Toad 13",
      price: 299,
      rating: 3,
      brand: "Portronics",
      desc: "Portronics Toad 13, POR 1381 Wireless Optical Mouse  (2.4GHz Wireless, Black)",
      image:
        "https://rukminim1.flixcart.com/image/612/612/kt4ozgw0/mouse/a/d/l/toad-13-portronics-original-imag6jqawv8zhpum.jpeg?q=70",
      available: true,
    },
    {
      id: "m3",
      name: "Lenovo KB MICE_BO",
      price: 255,
      rating: 5,
      brand: "Lenovo",
      desc: "Lenovo KB MICE_BO 300 USB Mouse Wired Optical Mouse  (USB 2.0, Black)",
      image:
        "https://rukminim1.flixcart.com/image/612/612/ju8oxow0/mouse-refurbished/6/b/z/c-optical-mouse-kb-mice-bo-lenovo-300-usb-mouse-lenovo-original-imaf9hpfxkrf4sdh.jpeg?q=70",
      available: true,
    },
    {
      id: "m4",
      name: "RPM Euro Games",
      price: 549,
      rating: 5,
      brand: "RPM",
      desc: "RPM Euro Games Wireless Gaming Mouse| Rechargeable - 500 mAh Battery | Upto 3200 DPI | 6 Buttons | Backlit RGB Wireless Optical Gaming Mouse  (2.4GHz Wireless, Black)",
      image:
        "https://rukminim1.flixcart.com/image/612/612/kxnl6kw0/mouse/5/8/m/wireless-gaming-mouse-rechargeable-500-mah-battery-upto-3200-dpi-original-imaga2da9yxvenhc.jpeg?q=70",
      available: true,
    },
    {
      id: "m5",
      name: "Portronics Toad 24",
      price: 343,
      rating: 3,
      brand: "Portronics",
      desc: "Portronics Toad 24, POR 1611 Wireless Optical Mouse  (2.4GHz Wireless, Black)",
      image:
        "https://rukminim1.flixcart.com/image/612/612/l3lx8cw0/mouse/i/o/f/toad-24-with-adjustable-dpi-portronics-original-imagepfzkggpsxz9.jpeg?q=70",
      available: false,
    },
    {
      id: "m6",
      name: "Zebronics ZEB-RISE",
      price: 99,
      rating: 1,
      brand: "Zebronics",
      desc: "ZEBRONICS ZEB-RISE Wired Optical Mouse  (USB 2.0, Black)",
      image:
        "https://rukminim1.flixcart.com/image/612/612/ksxjs7k0/mouse/n/5/l/zeb-rise-zebronics-original-imag6duduz5gvhhz.jpeg?q=70",
      available: true,
    },
    {
      id: "m7",
      name: "Logitech M171",
      price: 595,
      rating: 4,
      brand: "Logitech",
      desc: "Logitech M171 Wireless Optical Mouse  (2.4GHz Wireless, Blue Grey)",
      image:
        "https://rukminim2.flixcart.com/image/612/612/xif0q/mouse/2/h/7/-original-imagm2gtrm4h7nnu.jpeg?q=70",
      available: true,
    },
    {
      id: "m8",
      name: "Portronics Toad 23",
      price: 399,
      rating: 3,
      brand: "Portronics",
      desc: "Portronics Toad 23 Adjustable DPI 2.4GHz Wireless Optical Mouse  (2.4GHz Wireless, White)",
      image:
        "https://rukminim2.flixcart.com/image/612/612/xif0q/mouse/6/d/s/toad-23-adjustable-dpi-2-4ghz-portronics-original-imagz3jxmu8qnekb.jpeg?q=70",
      available: false,
    },
    {
      id: "m9",
      name: "HP M100",
      price: 349,
      rating: 3,
      brand: "HP",
      desc: "HP M100 Wired Optical Gaming Mouse  (USB 2.0, Black)",
      image:
        "https://rukminim2.flixcart.com/image/612/612/xif0q/mouse/7/f/t/-original-imagn3f9dwuqwqyt.jpeg?q=70",
      available: true,
    },
    {
      id: "m10",
      name: "HP M270",
      price: 486,
      rating: 3,
      brand: "HP",
      desc: "HP M270 Wired Optical Gaming Mouse  (USB 3.0, Black)",
      image:
        "https://rukminim2.flixcart.com/image/612/612/k7nnrm80/mouse/u/d/z/hp-m270-gaming-mouse-original-imafpupd8wwzefjm.jpeg?q=70",
      available: false,
    },
    {
      id: "m11",
      name: "ENTWINO F-1",
      price: 290,
      rating: 1,
      brand: "ENTWINO",
      desc: "ENTWINO F-1 Gaming Mouse Wired For Compute Wired Optical Gaming Mouse  (USB 2.0, Black)",
      image:
        "https://rukminim2.flixcart.com/image/612/612/kura1e80/mouse/w/4/a/f-1-gaming-mouse-wired-for-compute-entwino-original-imag7tykfbp9yquk.jpeg?q=70",
      available: false,
    },
    {
      id: "m12",
      name: "Ant Esports",
      price: 579,
      rating: 2,
      brand: "Ant Esports",
      desc: "Ant Esports GM320 /Ergonomic design with braided cable,8 Programmable Buttons,upto 12800 DPI Wired Optical Gaming Mouse  (USB 3.0, Black)",
      image:
        "https://rukminim2.flixcart.com/image/612/612/kiyw9e80-0/mouse/l/f/p/gm320-7200-dpi-adjustable-i-8-programmable-buttons-gaming-ant-original-imafymz4rfsu9yyq.jpeg?q=70",
      available: true,
    },
  ],
};
