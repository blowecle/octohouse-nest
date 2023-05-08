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
      "artifactID": [25]
    },
    {
      "artistID": 2,
      "name": "Ann Tucker",
      "company": "Studio A Group",
      "title": "Interior Designer",
      "social": ["http://www.studioagroup.com"],
      "blurb": "Ann Tucker is a local interior decorator who’s knowledge, artistry and excitement are unmatched. Her hand is in everything, not just the interior, from the octopus all the way to the creek.",
      "artifactID": [23,26]
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
      "artifactID": [3]
    },
    {
      "artistID": 5,
      "name": "Daniel Hornung",
      "company": "20 Digit Design",
      "title": "Glass Sculptor",
      "social": ["http://20digitdesign.com"],
      "blurb": "Designing the mermaid was tricky and Daniel was the perfect guy for the job. Do we go classic or mod patina? How does it integrate with the rest? Only Daniel had the chops for this one.",
      "artifactID": [3]
    },
    {
      "artistID": 6,
      "name": "Jim Berry",
      "company": "Blue Moon Glassworks",
      "title": "Glass Worker",
      "social": ["http://Austinbluemoon.com"],
      "blurb": "Jim is an amazing local artist that has been designing and teaching stain glass for decades. His tentacle and starfish stain glass are truly works of incomparable art.",
      "artifactID": [28]
    },
    {
      "artistID": 7,
      "name": "Heidi Choate",
      "company": "Rain Lily Design",
      "title": "Landscaper",
      "social": ["http://www.rainlilydesign.com", "http://www.instagram.com/rainlilydesign"],
      "blurb": "Heidi is an amazing landscaper and human being. Not only did she design the most interesting yards in Austin but she’s also a true joy to work with.",
      "artifactID": [6]
    },
    {
      "artistID": 8,
      "name": "Dan Johanson",
      "company": "Focal Point Features",
      "title": "Water Feature Designer",
      "social": ["http://focalpointfeatures.com", "https://www.facebook.com/FPFeatures", "https://www.instagram.com/focalpointfeatures_/"],
      "blurb": "The water features out front and back are so absolutely beautiful and calming. Everyone that sees them says so. They bring me joy daily.",
      "artifactID": [30]
    },
    {
      "artistID": 9,
      "name": "Craig and Teena",
      "company": "Maverick Door and Millwork, Inc.",
      "title": "Wood Carvers",
      "social": ["https://maverickdoor.com"],
      "blurb": "Craig and Teena did an amazing job at creating the front door, which was especially challenging for its stain glass integration and custom non-linear wave design. Wow!",
      "artifactID": [5]
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
      "artifactID": [9]
    },
    {
      "artistID": 12,
      "name": "Anna B.",
      "company": "Duende Exotic Skulls",
      "title": "Skull Artist",
      "social": ["https://duendeexoticskulls.carbonmade.com"],
      "blurb": "Anna is a local artist that created the Eyes of Texas longhorn skull, which tells the tale of Texas in thousands of beads. Seeing her art under rainbow lights just takes your breath away. Truly. ",
      "artifactID": [10]
    },
    {
      "artistID": 14,
      "name": "James Talbot",
      "company": "Talbot Studios",
      "title": "Artist Extraordinaire",
      "social": ["https://m.facebook.com/100057225348814/"],
      "blurb": "My house is nothing compared to Mr. Talbot’s home: Casa Neverlandia. You haven’t lived until you’ve taken a tour of his art house. ",
      "artifactID": [12]
    },
    {
      "artistID": 17,
      "name": "Evan Voyles",
      "company": "The Neon Jungle",
      "title": "Neon Glass Artist",
      "social": ["http://theneonjungle.com/"],
      "blurb": "Evan is a local neon artist and musician. Working with him and getting to know him has been one of the great pleasures of my life. ",
      "artifactID": [17]
    },
    {
      "artistID": 18,
      "name": "Aaron Flynn",
      "company": "The Neon Jungle",
      "title": "Mural Painter",
      "social": ["http://theneonjungle.com/"],
      "blurb": "Aaron Flynn is a local artist that painted the front of the Octopus House, based on Misha’s design. There’s nothing more zen than watching Aaron paint. Truly.",
      "artifactID": [1]
    },
    {
      "artistID": 19,
      "name": "Stuart and Dave",
      "company": "Steel House",
      "title": "Steel Artist",
      "social": ["http://www.steelhousemfg.com"],
      "blurb": "Stuart is a local artist that spend eight months of his life turning two tons of limestone is to a sculpture of Mother Nature, using everything from hydraulic chisels to X-acto knives. Really. He did that.",
      "artifactID": [18]
      },
    {
      "artistID": 20,
      "name": "Leo Mejilla",
      "company": "Leo's Fine Finish Painting",
      "title": "Ninja Painter",
      "social": ["https://instagram.com/leosffpaintingllc"],
      "blurb": "Leo is a local painter that virtually painted everything inside and outside of the house. And he’s a ninja! No, seriously, you don’t even know he’s there. Quietest human being I’ve ever met.",
      "artifactID": [23,27]
    },
    {
      "artistID": 21,
      "name": "Donny, Hugo and Brandon",
      "company": "Haas Home Automation",
      "title": "Home Automation",
      "social": ["https://www.haasht.com/"],
      "blurb": "The lights! Oh, the rainbow lights! You haven’t really seen the house until you hit a Rainbow button light switch or lit up the deck concert lights. Wow!",
      "artifactID": [19]
    },
    {
      "artistID": 22,
      "name": "Michael",
      "company": "Custom Tile of Austin",
      "title": "Tile Artist",
      "social": ["https://www.customtileofaustin.com"],
      "blurb": "Watching Michael tile is simply fascinating. Morrocan tile is quite challenging and he did an amazing job laying it out. ",
      "artifactID": [20]
    },
    {
      "artistID": 25,
      "name": "Aaron Pratt",
      "company": "Eur Cabinets",
      "title": "Cabinet Artist",
      "social": [],
      "blurb": "Aaron took an empty nook in my bedroom and turned it into a bookcase work of art. You can pull a book or a ukelele down! How cool is that?",
      "artifactID": [23]
    },
    {
      "artistID": 26,
      "name": "Wade Burleigh",
      "company": "",
      "title": "Wood Carver",
      "social": ["Burleighwade@yahoo.com"],
      "blurb": "When Wade isn’t carving wood, he is Santa Claus himself.  He turned an ordinary stump into one of the most awesomely weird and unique pieces of art for the house.",
      "artifactID": [29]
    }
  ]
  
  for(const artistData of artistsData){
    const artist = await this.artistRepo.create(artistData);
    await this.artistRepo.save(artist);
  }

  }

}
