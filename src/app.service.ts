import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './users/entities/users.entity';
import { Artist } from './artists/entities/artist.entity';
import { Artifact } from './artifacts/entities/artifact.entity';

@Injectable()
export class AppService {
  constructor(
    @InjectRepository(User) private userRepo: Repository<User>,
    @InjectRepository(Artist) private artistRepo: Repository<Artist>,
    @InjectRepository(Artifact) private artifactRepo: Repository<Artifact>,
  ) {}

  
  async seed() {
    const artistsData = [{
      "artistID": 1,
      "name": "Nelson Rockwood",
      "company": "Nelson Rockwood Homes",
      "title": "General Contractor",
      "social": ["http://www.nelsonrockwood.com", "http://www.instagram.com/nelson_rockwood"],
      "blurb": "Nelson is the only general contractor that could’ve remodeled this house, ‘cuz he’s the only one I’ve ever met with a degree in theatre. Talk about a perfect fit! His hand was in everything, literally, in the house, over the last two years.",
      "artifactID": [14]
    },
    {
      "artistID": 2,
      "name": "Ann Tucker",
      "company": "Studio A Group",
      "title": "Interior Designer",
      "social": ["http://www.studioagroup.com"],
      "blurb": "Ann Tucker is a local interior decorator who’s knowledge, artistry and excitement are unmatched. Her hand is in everything, not just the interior, from the octopus all the way to the creek.",
      "artifactID": [13,15]
    },
    {
      "artistID": 3,
      "name": "Mishka Westell",
      "company": "",
      "title": "Mural Designer",
      "social": ["http://www.instagram.com/mishkawestell","https://www.mishkawestell.com/"],
      "blurb": "Misha is a local artist that specializes in poster art for famous bands. The Octopus House is based on a poster that she made. Also, she’s a total badass.",
      "artifactID": [1]
    },
    {
      "artistID": 4,
      "name": "",
      "company": "Pyrology Foundry and Studio",
      "title": "Metal Forgers",
      "social": ["http://www.pyrology.com", "http://www.instagram.com/DITHfoundry"],
      "blurb": "The folks at Pyrology created the mermaid. Isn’t she a beauty! I was privileged to visit their foundry and see them pour metal at thousands of degrees and shape it into fine art.",
      "artifactID": [2]
    },
    {
      "artistID": 5,
      "name": "Daniel Hornung",
      "company": "20 Digit Design",
      "title": "Glass Sculptor",
      "social": ["http://20digitdesign.com"],
      "blurb": "Designing the mermaid was tricky and Daniel was the perfect guy for the job. Do we go classic or mod patina? How does it integrate with the rest? Only Daniel had the chops for this one.",
      "artifactID": [2]
    },
    {
      "artistID": 6,
      "name": "Jim Berry",
      "company": "Blue Moon Glassworks",
      "title": "Glass Worker",
      "social": ["http://Austinbluemoon.com"],
      "blurb": "Jim is an amazing local artist that has been designing and teaching stain glass for decades. His tentacle and starfish stain glass are truly works of incomparable art.",
      "artifactID": [4]
    },
    {
      "artistID": 7,
      "name": "Heidi Choate",
      "company": "Rain Lily Design",
      "title": "Landscaper",
      "social": ["http://www.rainlilydesign.com", "http://www.instagram.com/rainlilydesign"],
      "blurb": "Heidi is an amazing landscaper and human being. Not only did she design the most interesting yards in Austin but she’s also a true joy to work with.",
      "artifactID": [16]
    },
    {
      "artistID": 8,
      "name": "Dan Johanson",
      "company": "Focal Point Features",
      "title": "Water Feature Designer",
      "social": ["http://focalpointfeatures.com", "https://www.facebook.com/FPFeatures", "https://www.instagram.com/focalpointfeatures_/"],
      "blurb": "The water features out front and back are so absolutely beautiful and calming. Everyone that sees them says so. They bring me joy daily.",
      "artifactID": [9]
    },
    {
      "artistID": 9,
      "name": "Craig and Teena",
      "company": "Maverick Door and Millwork, Inc.",
      "title": "Wood Carvers",
      "social": ["https://maverickdoor.com"],
      "blurb": "Craig and Teena did an amazing job at creating the front door, which was especially challenging for its stain glass integration and custom non-linear wave design. Wow!",
      "artifactID": [3]
    },
    {
      "artistID": 10,
      "name": "Stuart Simpson",
      "company": "Austin Stone Carving",
      "title": "Stone Sculptor",
      "social": ["http://www.austinstonecarving.com"],
      "blurb": "This has been such a wonderful project to be a part of. Joey has been an absolute delight to work with, and has encouraged me from the get-go to use my artistic license, and have fun with the project, which in return has allowed me to fabricate something truly special. Nelson has also been a solid team member to collaborate with throughout the process. This is exactly the type of work I love to do and I am so grateful for this opportunity!",
      "artifactID": [8]
    },
    {
      "artistID": 11,
      "name": "",
      "company": "Nature's Treasures",
      "title": "Crystal Procurer",
      "social": ["http://naturestreasuresatx.com"],
      "blurb": "",
      "artifactID": []
    },
    {
      "artistID": 12,
      "name": "Anna B.",
      "company": "Duende Exotic Skulls",
      "title": "Skull Artist",
      "social": ["https://duendeexoticskulls.carbonmade.com"],
      "blurb": "Anna is a local artist that created the Eyes of Texas longhorn skull, which tells the tale of Texas in thousands of beads. Seeing her art under rainbow lights just takes your breath away. Truly. ",
      "artifactID": [6]
    },
    {
      "artistID": 13,
      "name": "James Talbot",
      "company": "Talbot Studios",
      "title": "Artist Extraordinaire",
      "social": ["https://m.facebook.com/100057225348814/"],
      "blurb": "My house is nothing compared to Mr. Talbot’s home: Casa Neverlandia. You haven’t lived until you’ve taken a tour of his art house. ",
      "artifactID": [7]
    },
    {
      "artistID": 14,
      "name": "Evan Voyles",
      "company": "The Neon Jungle",
      "title": "Neon Glass Artist",
      "social": ["http://theneonjungle.com/"],
      "blurb": "Evan is a local neon artist and musician. Working with him and getting to know him has been one of the great pleasures of my life. ",
      "artifactID": [5]
    },
    {
      "artistID": 15,
      "name": "Aaron Flynn",
      "company": "The Neon Jungle",
      "title": "Mural Painter",
      "social": ["http://theneonjungle.com/"],
      "blurb": "Aaron Flynn is a local artist that painted the front of the Octopus House, based on Misha’s design. There’s nothing more zen than watching Aaron paint. Truly.",
      "artifactID": [1]
    },
    {
      "artistID": 16,
      "name": "Stuart and Dave",
      "company": "Steel House",
      "title": "Steel Artist",
      "social": ["http://www.steelhousemfg.com"],
      "blurb": "Stuart is a local artist that spend eight months of his life turning two tons of limestone is to a sculpture of Mother Nature, using everything from hydraulic chisels to X-acto knives. Really. He did that.",
      "artifactID": [18]
      },
    {
      "artistID": 17,
      "name": "Leo Mejilla",
      "company": "Leo's Fine Finish Painting",
      "title": "Ninja Painter",
      "social": ["https://instagram.com/leosffpaintingllc"],
      "blurb": "Leo is a local painter that virtually painted everything inside and outside of the house. And he’s a ninja! No, seriously, you don’t even know he’s there. Quietest human being I’ve ever met.",
      "artifactID": [13,17]
    },
    {
      "artistID": 18,
      "name": "Donny, Hugo and Brandon",
      "company": "Haas Home Automation",
      "title": "Home Automation",
      "social": ["https://www.haasht.com/"],
      "blurb": "The lights! Oh, the rainbow lights! You haven’t really seen the house until you hit a Rainbow button light switch or lit up the deck concert lights. Wow!",
      "artifactID": [12]
    },
    {
      "artistID": 19,
      "name": "Michael",
      "company": "Custom Tile of Austin",
      "title": "Tile Artist",
      "social": ["https://www.customtileofaustin.com"],
      "blurb": "Watching Michael tile is simply fascinating. Morrocan tile is quite challenging and he did an amazing job laying it out. ",
      "artifactID": [11]
    },
    {
      "artistID": 20,
      "name": "Aaron Pratt",
      "company": "Eur Cabinets",
      "title": "Cabinet Artist",
      "social": [],
      "blurb": "Aaron took an empty nook in my bedroom and turned it into a bookcase work of art. You can pull a book or a ukelele down! How cool is that?",
      "artifactID": [13]
    },
    {
      "artistID": 21,
      "name": "Wade Burleigh",
      "company": "",
      "title": "Wood Carver",
      "social": ["Burleighwade@yahoo.com"],
      "blurb": "When Wade isn’t carving wood, he is Santa Claus himself.  He turned an ordinary stump into one of the most awesomely weird and unique pieces of art for the house.",
      "artifactID": [10]
    }
  ]

  const artifactsData = [{
    "artifactID": 1,
    "name": "THE FACE",
    "images": ["https://res.cloudinary.com/dyjzfdguj/image/upload/v1678992183/evan%20web%20photos/The_Face_1-100_lgesog.jpg","https://res.cloudinary.com/dyjzfdguj/image/upload/v1678992183/evan%20web%20photos/The_Face_2-100_z2bwpb.jpg", "https://res.cloudinary.com/dyjzfdguj/image/upload/v1678992183/evan%20web%20photos/The_Face_3-100_rdesz0.jpg", "https://res.cloudinary.com/dyjzfdguj/image/upload/v1678992183/evan%20web%20photos/The_Face_4-100_ymv6ie.jpg"],
    "blurb": "The integration of multiple mediums into a non-linear mural sets this beautiful Octopus art house apart from all others. ",
    "artistID": [3, 15],
    "artistDescription": ["DESIGNED BY", "PAINTED BY"],
    "approved": true
  },
  {
    "artifactID": 2,
    "name": "THE MERMAID",
    "images": ["https://res.cloudinary.com/dyjzfdguj/image/upload/v1678992285/evan%20web%20photos/Mermaid_1-100_j1nivy.jpg","https://res.cloudinary.com/dyjzfdguj/image/upload/v1678992285/evan%20web%20photos/Mermaid_2-100_saegyw.jpg","https://res.cloudinary.com/dyjzfdguj/image/upload/v1678992286/evan%20web%20photos/Mermaid_3-100_se2vkl.jpg","https://res.cloudinary.com/dyjzfdguj/image/upload/v1678992285/evan%20web%20photos/Mermaid_4-100_dkgepg.jpg"],
    "blurb": "The mermaid, forged in fire, and patinaed with love, will last a lifetime. She’s perfectly balanced so that she can spin to see all that she encompasses. ",
    "artistID": [4, 5],
    "artistDescription": ["FORGED BY", "DESIGNED BY"],
    "approved": true
  },
  {
    "artifactID": 3,
    "name": "THE DOOR",
    "images": ["https://res.cloudinary.com/dyjzfdguj/image/upload/v1678992344/evan%20web%20photos/The_Door_1-100_kwawap.jpg","https://res.cloudinary.com/dyjzfdguj/image/upload/v1678992344/evan%20web%20photos/The_Door_2-100_y3bdda.jpg","https://res.cloudinary.com/dyjzfdguj/image/upload/v1678992344/evan%20web%20photos/The_Door_3-100_qslulj.jpg"],
    "blurb": "Carving African Mahogany into waves on an irregular door is no easy feat but it was done so masterfully here.",
    "artistID": [9],
    "artistDescription": ["CARVED BY"],
    "approved": true
  },
  {
    "artifactID": 4,
    "name": "THE GLASS",
    "images": ["https://res.cloudinary.com/dyjzfdguj/image/upload/v1678992389/evan%20web%20photos/The_Glass_1-100_hjqrdn.jpg", "https://res.cloudinary.com/dyjzfdguj/image/upload/v1678992389/evan%20web%20photos/The_Glass_2-100_rqvoyi.jpg", "https://res.cloudinary.com/dyjzfdguj/image/upload/v1678992389/evan%20web%20photos/The_Glass_3-100_qowj3h.jpg","https://res.cloudinary.com/dyjzfdguj/image/upload/v1678992389/evan%20web%20photos/The_Glass_4-100_nwnuxd.jpg"],
    "blurb": "The stain glass tentacle and front door starfish are truly works of art that bring beautiful light into my life daily. ",
    "artistID": [6],
    "artistDescription": ["CRAFTED BY"],
    "approved": true
  },
  {
    "artifactID": 5,
    "name": "NEON SEAHORSE",
    "images": ["https://res.cloudinary.com/dyjzfdguj/image/upload/v1678992480/evan%20web%20photos/Seahorse_1-100_vaiuyu.jpg", "https://res.cloudinary.com/dyjzfdguj/image/upload/v1678992479/evan%20web%20photos/Seahorse_2-100_yk0wnx.jpg","https://res.cloudinary.com/dyjzfdguj/image/upload/v1678992479/evan%20web%20photos/Seahorse_3-100_k6hoes.jpg"],
    "blurb": "The neon seahorse, which shines so brightly at night, watches over the house as the rest of the fish sleep. ",
    "artistID": [14],
    "artistDescription": ["CREATED BY"],
    "approved": true
  },
  {
    "artifactID": 6,
    "name": "EYES OF TEXAS",
    "images": ["https://res.cloudinary.com/dyjzfdguj/image/upload/v1678992548/evan%20web%20photos/Eyes_of_TX_1-100_fvdxze.jpg","https://res.cloudinary.com/dyjzfdguj/image/upload/v1678992548/evan%20web%20photos/Eyes_of_TX_2-100_esglxy.jpg","https://res.cloudinary.com/dyjzfdguj/image/upload/v1678992548/evan%20web%20photos/Eyes_of_TX_3-100_tqd2f9.jpg","https://res.cloudinary.com/dyjzfdguj/image/upload/v1678992548/evan%20web%20photos/Eyes_of_TX_4-100_y582p9.jpg","https://res.cloudinary.com/dyjzfdguj/image/upload/v1678992548/evan%20web%20photos/Eyes_of_TX_5-100_delpkh.jpg"],
    "blurb": "The longhorn is a Texas icon and what better way to show it then with thousands of beads under rainbow lights.",
    "artistID": [12],
    "artistDescription": ["CREATED BY"],
    "approved": true
  },
  {
    "artifactID": 7,
    "name": "SACRED SPACE",
    "images": ["https://res.cloudinary.com/dyjzfdguj/image/upload/v1679021345/evan%20web%20photos/Sacred_Space_1-100_tacxhs.jpg","https://res.cloudinary.com/dyjzfdguj/image/upload/v1679021345/evan%20web%20photos/Sacred_Space_2-100_ddbmdi.jpg","https://res.cloudinary.com/dyjzfdguj/image/upload/v1679021345/evan%20web%20photos/Sacred_Space_3-100_vedvd0.jpg","https://res.cloudinary.com/dyjzfdguj/image/upload/v1679021345/evan%20web%20photos/Sacred_Space_4-100_rayv01.jpg"],
    "blurb": "Walking under this piece of art as I head to bed each night brings me joy and serenity. What a joy to behold 19,000 beads perfectly arranged. ",
    "artistID": [13],
    "artistDescription": ["WOVEN BY"],
    "approved": true
  },
  {
    "artifactID": 8,
    "name": "MOTHER NATURE",
    "images": ["https://res.cloudinary.com/dyjzfdguj/image/upload/v1678992657/evan%20web%20photos/Mother_Nature_1-100_yffs7g.jpg","https://res.cloudinary.com/dyjzfdguj/image/upload/v1678992657/evan%20web%20photos/Mother_Nature_2-100_qjzu5z.jpg","https://res.cloudinary.com/dyjzfdguj/image/upload/v1679070325/evan%20web%20photos/IMG_20230317_111232_hirxyy.jpg"],
    "blurb": "She started as two tons of Texas limestone and eight months later we had a true goddess on our hands.",
    "artistID": [10],
    "artistDescription": ["SCULPTED BY"],
    "approved": true
  },
  {
    "artifactID": 9,
    "name": "THE WATERFALL",
    "images": ["https://res.cloudinary.com/dyjzfdguj/image/upload/v1678993362/evan%20web%20photos/Gardener_1-100_abk9u7.jpg","https://res.cloudinary.com/dyjzfdguj/image/upload/v1678993363/evan%20web%20photos/Gardener_3-100_mjb0ry.jpg","https://res.cloudinary.com/dyjzfdguj/image/upload/v1679070325/evan%20web%20photos/IMG_20230317_111250_ugxksl.jpg"],
    "blurb": "Flowing water is a soothing sound and these waterfeatures are no exception.",
    "artistID": [8],
    "artistDescription": ["DESIGNED AND INSTALLED BY"],
    "approved": true
  },
  {
    "artifactID": 10,
    "name": "THE THRONE",
    "images": ["https://res.cloudinary.com/dyjzfdguj/image/upload/c_crop,h_2688,y_718/v1679081919/evan%20web%20photos/PXL_20230317_193406791_p1zjdn.jpg","https://res.cloudinary.com/dyjzfdguj/image/upload/v1679081918/evan%20web%20photos/PXL_20230317_193354425_rnm4br.jpg"],
    "blurb": "What originated as an ugly stump most would turn into woodchips, became a throne built for Mother Nature herself.",
    "artistID": [21],
    "artistDescription": ["CARVED BY"],
    "approved": true
  },
  {
    "artifactID": 11,
    "name": "THE TILING",
    "images": ["https://res.cloudinary.com/dyjzfdguj/image/upload/v1678992703/evan%20web%20photos/Tile_1-100_noxob7.jpg","https://res.cloudinary.com/dyjzfdguj/image/upload/v1678992704/evan%20web%20photos/Tile_2-100_udxq9d.jpg"],
    "blurb": "Most tiling is relatively easy but if you want custom beauty nothing matches Moroccan.",
    "artistID": [19],
    "artistDescription": ["TILEWORK BY"],
    "approved": true
  },
  {
    "artifactID": 12,
    "name": "THE LIGHTS",
    "images": ["https://res.cloudinary.com/dyjzfdguj/image/upload/v1678992783/evan%20web%20photos/Lighting_1-100_bne81g.jpg","https://res.cloudinary.com/dyjzfdguj/image/upload/v1678992783/evan%20web%20photos/Lighting_2-100_a0u2bm.jpg","https://res.cloudinary.com/dyjzfdguj/image/upload/v1678992783/evan%20web%20photos/Lights_3-100_ohwtpv.jpg"],
    "blurb": "The Ketra lights are gorgeous, bright and highly customizable: push one button and your whole house is rainbow colored!",
    "artistID": [18],
    "artistDescription": ["ILLUMINATED BY"],
    "approved": true
  },
  {
    "artifactID": 13,
    "name": "THE BOOKCASE",
    "images": ["https://res.cloudinary.com/dyjzfdguj/image/upload/v1678992841/evan%20web%20photos/Bookshelf_2-100_btlzjx.jpg","https://res.cloudinary.com/dyjzfdguj/image/upload/v1678992841/evan%20web%20photos/Bookshelf_1-100_jf8duz.jpg"],
    "blurb": "Why just store books when you can create a work of art and play music at the same time?",
    "artistID": [2,20],
    "artistDescription": ["DESIGNED BY","PAINTED BY","BUILT BY"],
    "approved": true
  },
  {
    "artifactID": 14,
    "name": "THE BRAIN",
    "images": ["https://res.cloudinary.com/dyjzfdguj/image/upload/v1678993177/evan%20web%20photos/The_Brain_1-100_dqaqge.jpg","https://res.cloudinary.com/dyjzfdguj/image/upload/v1678993177/evan%20web%20photos/The_Brain_2-100_kzx6k8.jpg","https://res.cloudinary.com/dyjzfdguj/image/upload/v1677957562/octopus-house/6BBD1975-278E-4D63-8EE7-85998EEA6C2A_pours4.jpg"],
    "blurb": "How many brains does an octopus have? Way more than humans. That’s the only way we could build this thing!",
    "artistID": [1],
    "artistDescription": ["CONTRACTING BY"],
    "approved": true
  },
  {
    "artifactID": 15,
    "name": "THE STYLIST",
    "images": ["https://res.cloudinary.com/dyjzfdguj/image/upload/v1678993316/evan%20web%20photos/Stylist_1-100_qjsydf.jpg","https://res.cloudinary.com/dyjzfdguj/image/upload/v1678993316/evan%20web%20photos/Stylist_2-100_ox34zf.jpg","https://res.cloudinary.com/dyjzfdguj/image/upload/v1678993316/evan%20web%20photos/Stylist_3-100_sk69ap.jpg"],
    "blurb": "Did you know that octopi have stylists? I don’t wake up in the morning looking like this, guys. It takes effort and style.",
    "artistID": [2],
    "artistDescription": ["INTERIOR DESIGN BY"],
    "approved": true
  },
  {
    "artifactID": 16,
    "name": "THE GARDENER",
    "images": ["https://res.cloudinary.com/dyjzfdguj/image/upload/v1679081918/evan%20web%20photos/PXL_20230317_193441362.PORTRAIT_wahzou.jpg"],
    "blurb": "Did you know that octopi have gardens? Oh right, The Beatles told you so.",
    "artistID": [7],
    "artistDescription": ["LANDSCAPING BY"],
    "approved": true
  },
  {
    "artifactID": 17,
    "name": "THE NINJA PAINTER",
    "images": ["https://res.cloudinary.com/dyjzfdguj/image/upload/v1678993404/evan%20web%20photos/Ninja_Painter_1-100_h6i2hz.jpg","https://res.cloudinary.com/dyjzfdguj/image/upload/v1678993404/evan%20web%20photos/Ninja_Painter_2-100_zxw6vi.jpg"],
    "blurb": "Take a look at my ceiling sometime. It’s a painted work of art. How about the bookcase? Wow!",
    "artistID": [17],
    "artistDescription": ["PAINTING BY"],
    "approved": true
  }
]

  


//seed
  for(const artifactData of artifactsData){
    const artifact = await this.artifactRepo.create(artifactData);
    await this.artifactRepo.save(artifact);
  }  

  for(const artistData of artistsData){
    const artist = await this.artistRepo.create(artistData);
    await this.artistRepo.save(artist);
  }

  }

}
