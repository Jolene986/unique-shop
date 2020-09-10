const SHOP_DATA = [
  {
    id: 1,
    title: 'Earrings',
    routeName: 'earrings',
    items: [
      {
        id: 1,
        name: 'Feather Earrings',
        images: ['https://www.kay.com/productimages/processed/V-502177203_0_800.jpg?pristine=true'],
        price: 25
      },
      {
        id: 2,
        name: 'Diamond Halo',
        images: ['https://image.brilliantearth.com/media/product_images/SI/BE3DH4_white_top.jpg'],
        price: 18
      },
      {
        id: 3,
        name: 'Petal Teardrop',
        images: ['https://www.claires.com/dw/image/v2/BBTK_PRD/on/demandware.static/-/Sites-master-catalog/default/dw3eee4763/images/hi-res/31674_1.jpg?sw=734&sh=734&sm=fit'],
        price: 35
      },
      {
        id: 4,
        name: 'Diamond Stud',
        images: ['https://i5.walmartimages.com/asr/d4c6e2d2-b900-4976-a6ef-78cf63edc08c_1.b2602ee2a014f8adec9721fffd489e53.jpeg?odnWidth=612&odnHeight=612&odnBg=ffffff'],
        price: 25
      },
      {
        id: 5,
        name: 'Dreamcatcher Drop',
        images: ['https://media.4rgos.it/s/Argos/9188095_R_SET?$Main768$&w=620&h=620'],
        price: 18
      },
      {
        id: 6,
        name: 'Butterfly Drop',
        images: ['https://i0.wp.com/www.jeweldaze.com/wp-content/uploads/2019/10/37-4.jpg?fit=800%2C800&ssl=1'],
        price: 14
      },
      {
        id: 7,
        name: 'Honoria Drop',
        images: ['https://s7d1.scene7.com/is/image/BHLDN/51463529_070_a?$pdpmain$'],
        price: 18
      },
      {
        id: 8,
        name: 'Amabel',
        images: ['https://s7d1.scene7.com/is/image/BHLDN/52946035_007_a?$pdpmain$'],
        price: 14
      },
      {
        id: 9,
        name: 'Myrtle Drops',
        images: ['https://s7d1.scene7.com/is/image/BHLDN/40084246_007_a?$pdpmain$'],
        price: 16
      }
    ]
  },
  {
    id: 2,
    title: 'Rings',
    routeName: 'Rings',
    items: [
      {
        id: 10,
        name: 'Silver Snake',
        images: ['https://cdn.shopify.com/s/files/1/0450/3685/products/qr157_large.jpg?v=1537548884'],
        price: 220
      },
      {
        id: 11,
        name: 'Solitair',
        images: ['https://4.imimg.com/data4/KA/JQ/MY-6054467/finger-rings-500x500.jpg'],
        price: 280
      },
      {
        id: 12,
        name: 'Valentine Love',
        images: ['https://images-na.ssl-images-amazon.com/images/I/61kQLz9eBCL._UY395_.jpg'],
        price: 110
      },
      {
        id: 13,
        name: 'Summer Breeze',
        images: ['https://s3.amazonaws.com/ISHOWIMAGES/Coast_Diamond/ORIGINAL/42052814_0.png'],
        price: 160
      },
      {
        id: 14,
        name: 'Side Stone',
        images: ['https://www.arthursjewelers.com/content/images/thumbs/500/2036-18kw_6-19299566.jpeg'],
        price: 160
      },
      {
        id: 15,
        name: 'Teardrop',
        images: ['https://content.diamondnexus.com/media/catalog/product/cache/1/thumbnail/600x/9df78eab33525d08d6e5fb8d27136e95/p/r/prague_pear_-_white_view_-_1.jpg'],
        price: 160
      },
      {
        id: 16,
        name: 'Classic Leaves',
        images: ['https://cdn.caratlane.com/media/catalog/product/cache/6/image/480x480/9df78eab33525d08d6e5fb8d27136e95//J/R/JR03980-YGP900_11_listfront.jpg'],
        price: 190
      },
      {
        id: 17,
        name: 'Summer Rose',
        images: ['https://images-na.ssl-images-amazon.com/images/I/41ak7YnqfiL._UY395_.jpg'],
        price: 200
      }
    ]
  },
  {
    id: 3,
    title: 'Brooches',
    routeName: 'brooches',
    items: [
      {
        id: 18,
        name: 'Butterfly joy',
        images: ['https://cdn.shopify.com/s/files/1/0774/7431/products/Balmoral_Butterfly_Brooch_large.jpg?v=1581614812'],
        price: 125
      },
      {
        id: 19,
        name: 'Blue Dragonfly ',
        images: ['https://www.bentley-skinner.co.uk/london/jewellery/images/55049-a-victorian-sapphire-and-diamond-bee-brooch-2-500x500.jpg'],
        price: 90
      },
      {
        id: 20,
        name: 'Forever More ',
        images: ['https://www.boutiqueottoman.com/wp-content/uploads/2018/07/Cubic-Zirconia-Swarovski-Flower-Design-Brooch-Boutique-Ottoman-Silver-Brooches-Pins-BOW-8096.jpg'],
        price: 90
      },
      {
        id: 21,
        name: 'Mountain Lake',
        images: ['https://www.michalkirat.com/wp-content/uploads/2018/05/brooches-pin-roman-glass-jewelry-jmp135-3.jpg'],
        price: 165
      },
      {
        id: 22,
        name: "The Witcher's Bride",
        images: ['https://cdn.shopify.com/s/files/1/0970/1656/products/CB62_600x600.jpg?v=1571438823'],
        price: 185
      }
    ]
  },
  {
    id: 4,
    title: 'Bracelets',
    routeName: 'bracelets',
    items: [
      {
        id: 23,
        name: 'Forever And Ever',
        images: ['https://asset.swarovski.com/images/$size_610/t_swa103/b_rgb:fafafa,c_scale,dpr_3.0,f_auto,w_200/5518871_png/bracelet-jonc-swarovski-infinity--blanc--m%C3%A9tal-dor%C3%A9-rose-swarovski-5518871.png'],
        price: 25
      },
      {
        id: 24,
        name: 'Charmed',
        images: ['https://media.4rgos.it/s/Argos/9185029_R_SET?$Main768$&w=620&h=620'],
        price: 20
      },
      {
        id: 25,
        name: 'The North Star',
        images: ['https://philippaherbert.co.uk/wp-content/uploads/2019/02/Philippa_Herbert_9kt_yellow_gold_north_star_bracelet_white.jpg'],
        price: 80
      },
      {
        id: 26,
        name: 'Silver Kisses',
        images: ['https://www.zalesoutlet.com/productimages/processed/V-20109649_0_800.jpg'],
        price: 80
      },
      {
        id: 27,
        name: 'Simply Silver',
        images: ['https://images-na.ssl-images-amazon.com/images/I/41ZG2GGTyWL.jpg'],
        price: 45
      },
      {
        id: 28,
        name: 'Diamond Accent',
        images: ['https://www.kay.com/productimages/processed/V-111532002_0_320.jpg?pristine=true'],
        price: 135
      },
      {
        id: 29,
        name: 'Chamomile Flower Charm',
        images: ['https://assets.kogan.com/images/brilliant/BTQ-VB523A/1-9b3061fcf7-vogue925-vb523a-1.jpg?auto=webp&canvas=753%2C502&fit=bounds&height=502&quality=75&width=753'],
        price: 20
      }
    ]
  },
  {
    id: 5,
    title: 'necklaces',
    routeName: 'necklaces',
    items: [
      {
        id: 30,
        name: 'Moon & Stars',
        images: ['https://www.oliviaburton.com/dw/image/v2/BDKZ_PRD/on/demandware.static/-/Sites-mgi-master/default/dwd5ce7a77/images/products/OBJCLN02_1.jpg?sw=533&sh=533'],
        price: 325
      },
      {
        id: 31,
        name: 'My Heart',
        images: ['https://media.4rgos.it/i/Argos/7094057_R_Z001A?w=750&h=440&qlt=70'],
        price: 20
      },
      {
        
        id: 32,
        name: 'The Roots',
        images: ['https://slimages.macysassets.com/is/image/MCY/products/8/optimized/3422008_fpx.tif?op_sharpen=1&wid=500&hei=613&fit=fit,1&$filtersm$'],
        price: 40
      },
      {
        id: 33,
        name: 'Diamond Star',
        images: ['https://www.helzberg.com/media/catalog/product/s/f/sftp_i_imagesinitial23254902325490.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=600&width=600&canvas=600:600'],
        price: 25
      },
      {
        id: 34,
        name: 'Firefly',
        images: '[https://media.4rgos.it/s/Argos/2013909_R_SET?$Main768$&w=620&h=620]',
        price: 25
      },
      {
        id: 35,
        name: 'Circle Of Life',
        images: ['https://target.scene7.com/is/image/Target/GUEST_a4cbead9-9071-4225-8eb8-2750bd45dd66?wid=488&hei=488&fmt=pjpeg'],
        price: 25
      }
    ]
  }
]
export default SHOP_DATA;