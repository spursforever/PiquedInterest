from app.models import db, Pin

def seed_pins():
    pin_1 = Pin(
        title='Kuang Si Falls',
        description="",
        img_url='https://i.pinimg.com/236x/e2/74/04/e2740425da4e12ece3d150f0cd7c87db.jpg',        
        user_id=1
    )
    pin_2 = Pin(
        title="Balsamic Steak",
        description='',
        img_url='https://i.pinimg.com/564x/82/f8/76/82f876eac280e80bc666acb3e0febe3f.jpg',        
        user_id=2
    )
    pin_3 = Pin(
        title='Dunk FTW!!!',
        description='Best Basketball Manga Ever!',
        img_url='https://i.pinimg.com/564x/bb/72/47/bb7247b868e7f3be45a434657a250fd2.jpg',       
        user_id=1
    )
    pin_4 = Pin(
        title='An Oasis for Plant',
        description='',
        img_url='https://i.pinimg.com/564x/a3/b7/04/a3b7045c47c494c2df7e874353801ff8.jpg',        
        user_id=1
    )
    pin_5 = Pin(
        title='Fire Duck',
        description='',
        img_url='https://i.pinimg.com/236x/e1/1a/82/e11a824160519f3d8316ab6532943995.jpg',        
        user_id=2
    )
    pin_6 = Pin(
        title='Blue Lagoon Mocktail',
        description='Savor this blue lagoon mocktail on hot summer days. ',
        img_url='https://i.pinimg.com/564x/84/87/8d/84878da36d27e4c0603ecd48bee6c548.jpg',        
        user_id=2
    )
    pin_7 = Pin(
        title='Lu Rou Fan',
        description='Simply GOAT!!!',
        img_url='https://i.pinimg.com/564x/84/93/04/849304342498c1c38628b8da68dcb144.jpg',        
        user_id=2
    )
    pin_8 = Pin(
        title='Mysterious Man in NFL',
        description='also probably overated as a system QB...',
        img_url='https://i.pinimg.com/564x/3d/cb/78/3dcb7847a7a7d4f0377b2f034831b28c.jpg',       
        user_id=2
    )
    pin_9 = Pin(
        title='Hikes in Dolomites, Italy',
        description='',
        img_url='https://i.pinimg.com/564x/8d/7a/75/8d7a75a19a8b9b68dd6e0a9c4dfd63c5.jpg',        
        user_id=1
    )
    pin_10 = Pin(
        title='The True Big Three!',
        description='Best Big Three in my eyes...',
        img_url='https://i.pinimg.com/564x/7a/10/bb/7a10bb1e0369865819d74995e9c042e8.jpg',        
        user_id=1
    )
    pin_11 = Pin(
        title='Shilin Night Market',
        description="",
        img_url='https://i.pinimg.com/564x/1b/08/9c/1b089cb48f42c6a83ebd25e8d4fb6cab.jpg',        
        user_id=1
    )
    pin_12 = Pin(
        title="Luke Skywalker",
        description='Is he better than his dad???',
        img_url='https://i.pinimg.com/564x/f8/4d/e1/f84de1acb7fdd294f29f5e82415acff2.jpg',        
        user_id=2
    )
    pin_13 = Pin(
        title='KBBQ Paradise',
        description='',
        img_url='https://i.pinimg.com/564x/e9/7c/95/e97c952a3a578b45234a57eab88091d0.jpg',       
        user_id=6
    )
    pin_14 = Pin(
        title='Ironman and his armies',
        description='',
        img_url='https://i.pinimg.com/564x/76/00/b9/7600b96d6e425da9c190c2cccc069ea5.jpg',        
        user_id=1
    )
    pin_15 = Pin(
        title='Road Trip Ideas',
        description='',
        img_url='https://i.pinimg.com/564x/01/c6/09/01c6095d82aa8f14b640430d511a109e.jpg',        
        user_id=1
    )
    pin_16 = Pin(
        title='Vastness Of The Universe',
        description='',
        img_url='https://i.pinimg.com/564x/3c/75/7c/3c757c81f3ae2a03ea66eb783a90943d.jpg',        
        user_id=2
    )
    pin_17 = Pin(
        title='Captain Thor?',
        description='Yes, it looks weird...',
        img_url='https://i.pinimg.com/564x/09/1f/57/091f579fa5a117bf37e11d524cee360f.jpg',        
        user_id=3
    )
    pin_18 = Pin(
        title='Watermelon Slushie',
        description='',
        img_url='https://i.pinimg.com/564x/74/ea/ae/74eaaea08e03a01281f03768d2e8555d.jpg',       
        user_id=4
    )
    pin_19 = Pin(
        title='Shohei Ohtani',
        description='',
        img_url='https://i.pinimg.com/564x/a4/a6/c0/a4a6c00277823d1f0a8954dcf178fdc6.jpg',        
        user_id=5
    )
    pin_20 = Pin(
        title='Mamba Forever',
        description='',
        img_url='https://i.pinimg.com/564x/1a/16/8f/1a168fd9a42184f6daac46ad540f120b.jpg',        
        user_id=6
    )
    pin_21 = Pin(
        title='Fragrant Harbour',
        description="",
        img_url='https://i.pinimg.com/564x/65/d9/5c/65d95c323197e33d38889ccc4cd634eb.jpg',        
        user_id=1
    )
    pin_22 = Pin(
        title="Brooklyn Bridge",
        description='',
        img_url='https://i.pinimg.com/564x/88/41/90/88419094acdadbb7437c973e4233bc95.jpg',        
        user_id=2
    )
    pin_23 = Pin(
        title='Sunrise in Alishan',
        description='',
        img_url='https://i.pinimg.com/564x/ff/c8/91/ffc891b4807b69ce64b5c32dcddb7522.jpg',       
        user_id=3
    )
    pin_24 = Pin(
        title='Adorable Corgi',
        description='Take a look at how adorable these dogs are and learn some things about the breed.',
        img_url='https://i.pinimg.com/564x/a6/4e/fd/a64efdf5a4be30ba38fd0190f4a51339.jpg',        
        user_id=4
    )
    pin_25 = Pin(
        title='Marina Bay Sands',
        description='Feel the different in large The finale night of the Double Helix Bridge Opening Ceremony',
        img_url='https://i.pinimg.com/564x/db/38/f8/db38f8e1e4841aaca9d049804d1e8739.jpg',        
        user_id=5
    )
    pin_26 = Pin(
        title='Space Needle',
        description='This is a must visit!',
        img_url='https://i.pinimg.com/564x/31/5a/7a/315a7aeed5bfa3fda62f879a342f7c3b.jpg',        
        user_id=6
    )    
    pin_27 = Pin(
        title='Ezreal',
        description='',
        img_url='https://i.pinimg.com/564x/99/7a/bd/997abdd47391326c3fb60152f84a9e3c.jpg',        
        user_id=1
    )
    pin_28 = Pin(
        title='Classic Scene',
        description='',
        img_url='https://i.pinimg.com/564x/66/01/e5/6601e5f75b769b965741c5e223482cb9.jpg',        
        user_id=2
    )
    pin_29 = Pin(
        title='The Great Wall',
        description='',
        img_url='https://i.pinimg.com/564x/5b/a8/58/5ba85807b9122b93ae2758ffcf217656.jpg',        
        user_id=3
    )
    pin_30 = Pin(
        title='Frank Ocean Performing',
        description='',
        img_url='https://i.pinimg.com/564x/d4/f9/e8/d4f9e85367365ef4912d43297ada3ac1.jpg',        
        user_id=4
    )
    pin_31 = Pin(
        title='Kauai, Hawaii',
        description='',
        img_url='https://i.pinimg.com/564x/e3/d2/a9/e3d2a96d8a4b5ca1bfd32042906b8742.jpg',        
        user_id=5
    )
    pin_32 = Pin(
        title='The Bad Man!',
        description='',
        img_url='https://i.pinimg.com/564x/c7/84/de/c784de334eb9cf46835272b2fca38121.jpg',        
        user_id=6
    )
    pin_33 = Pin(
        title='KOTA KINABALU, MALAYSIA ',
        description='',
        img_url='https://i.pinimg.com/564x/21/72/23/2172233ed02d26f2960940c5513a9d5a.jpg',        
        user_id=1
    )
    pin_34 = Pin(
        title='My Favorite Nightmarket',
        description='',
        img_url='https://i.pinimg.com/564x/74/8c/ae/748cae1543f654225ef0f96e2abe3482.jpg',        
        user_id=2
    )
    pin_35 = Pin(
        title='Religious Person',
        description='',
        img_url='https://i.pinimg.com/564x/a4/89/1a/a4891a0ff42bae29a0356d0c343c1b39.jpg',        
        user_id=3
    )
    pin_36 = Pin(
        title='Teriyaki Salmon Sushi Bowl',
        description='Looking hella delicious',
        img_url='https://i.pinimg.com/564x/42/f2/39/42f2399afd746b18bafbf447266d1157.jpg',        
        user_id=4
    )
    pin_37 = Pin(
        title='Luffy vs Kaido',
        description='',
        img_url='https://i.pinimg.com/564x/94/0b/22/940b229b5530f3dd5f5a08e55ab9d641.jpg',        
        user_id=5
    )
    pin_38 = Pin(
        title='The Loop, Chicago',
        description='',
        img_url='https://i.pinimg.com/564x/38/18/ab/3818ab65a5d54f762160a03f905ca6bc.jpg',        
        user_id=6
    )
    pin_39 = Pin(
        title='Getty Museum',
        description='',
        img_url='https://i.pinimg.com/564x/1c/85/52/1c85526aa6ea5e5564c63861220c15a6.jpg',        
        user_id=1
    )
    pin_40 = Pin(
        title='Jiu Fen Sweet Potato Balls',
        description='',
        img_url='https://i.pinimg.com/564x/2d/0b/93/2d0b93422e1db7f103cd14df3d7375a1.jpg',        
        user_id=2
    )
    pin_41 = Pin(
        title='Digimon First Generation',
        description='There goes my childhood...',
        img_url='https://i.pinimg.com/564x/f0/ab/7d/f0ab7db5991b8960649915b77e506f36.jpg',        
        user_id=3
    )
    pin_42 = Pin(
        title='Santorini',
        description='',
        img_url='https://i.pinimg.com/564x/c1/86/c9/c186c9cfa0b2ff64ea484fc5c7890e05.jpg',        
        user_id=4
    )
    pin_43 = Pin(
        title="Who's the GOAT?",
        description='Be civil in the comment section...',
        img_url='https://i.pinimg.com/564x/4d/08/f8/4d08f8919d276005e2d0440c2ba3e00a.jpg',        
        user_id=5
    )
    pin_44 = Pin(
        title='Team 7',
        description='Good Old Time',
        img_url='https://i.pinimg.com/564x/7c/9a/d5/7c9ad59847363f631fcb363026a3768a.jpg',        
        user_id=6
    )
    pin_45 = Pin(
        title='The Drive',
        description='',
        img_url='https://i.pinimg.com/564x/c4/76/30/c47630773cb86f90fdeb3d70b56d09db.jpg',        
        user_id=1
    )
    pin_46 = Pin(
        title='New York Vibe',
        description='',
        img_url='https://i.pinimg.com/564x/23/db/ba/23dbbaced2e643eae33ad391845360cc.jpg',        
        user_id=2
    )
    pin_47 = Pin(
        title='Coheart',
        description='',
        img_url='https://i.pinimg.com/564x/c7/38/35/c7383545228d2b3e9679e5193a6d8003.jpg',        
        user_id=3
    )
    pin_48 = Pin(
        title='Arashiyama Bamboo Forest',
        description='',
        img_url='https://i.pinimg.com/564x/57/cc/7d/57cc7d0ea8f08c866b98c2f42040c8d4.jpg',        
        user_id=4
    )
    pin_49 = Pin(
        title='The Next Jedi',
        description='',
        img_url='https://i.pinimg.com/564x/db/4f/cb/db4fcb6ba02827b5d850f5fdc57419ea.jpg',        
        user_id=5
    )
    pin_50 = Pin(
        title='Amazing Sunrays In The Forest',
        description='',
        img_url='https://i.pinimg.com/564x/62/a1/82/62a18227a9e5047e0d70be60a885ecba.jpg',        
        user_id=6
    )
    pin_51 = Pin(
        title='Melted my heart',
        description="This has to be one of the cutest thing out there!!!",
        img_url='https://i.pinimg.com/564x/81/8c/58/818c58adbcb8c6f34d35f9e72f86f701.jpg',        
        user_id=1
    )
    pin_52 = Pin(
        title='Spring Onion Pancake',
        description='Ideal Breakfast',
        img_url='https://i.pinimg.com/564x/bb/f7/41/bbf741346affad2cbdf8a96a5c23229c.jpg',        
        user_id=2
    )
    pin_53 = Pin(
        title='Twice',
        description='',
        img_url='https://i.pinimg.com/564x/aa/b3/c2/aab3c241ef3bb46e7bf2404179ee3dd7.jpg',        
        user_id=3
    )
    pin_54 = Pin(
        title='Lovely Couple',
        description='They are cute together',
        img_url='https://i.pinimg.com/564x/c7/9b/2a/c79b2ac80950dd7b432f0e234b27295e.jpg',        
        user_id=4
    )
    pin_55 = Pin(
        title='Neon Life',
        description='',
        img_url='https://i.pinimg.com/564x/d8/56/bf/d856bf1afd6eeb57ddb77c4d9911d58f.jpg',        
        user_id=5
    )
    pin_56 = Pin(
        title='The Sun Sets on Oamaru',
        description='',
        img_url='https://i.pinimg.com/564x/f6/af/8b/f6af8b1b96cdca1cd11e71fd0bd77a4f.jpg',        
        user_id=6
    ) 
       
    db.session.add(pin_1)
    db.session.add(pin_2)
    db.session.add(pin_3)
    db.session.add(pin_4)
    db.session.add(pin_5)
    db.session.add(pin_6)
    db.session.add(pin_7)
    db.session.add(pin_8)
    db.session.add(pin_9)
    db.session.add(pin_10)
    db.session.add(pin_11)
    db.session.add(pin_12)
    db.session.add(pin_13)
    db.session.add(pin_14)
    db.session.add(pin_15)
    db.session.add(pin_16)
    db.session.add(pin_17)
    db.session.add(pin_18)
    db.session.add(pin_19)
    db.session.add(pin_20)
    db.session.add(pin_21)
    db.session.add(pin_22)
    db.session.add(pin_23)
    db.session.add(pin_24)
    db.session.add(pin_25)
    db.session.add(pin_26)
    db.session.add(pin_27)
    db.session.add(pin_28)
    db.session.add(pin_29)
    db.session.add(pin_30)
    db.session.add(pin_31)
    db.session.add(pin_32)
    db.session.add(pin_33)
    db.session.add(pin_34)
    db.session.add(pin_35)
    db.session.add(pin_36)
    db.session.add(pin_37)
    db.session.add(pin_38)
    db.session.add(pin_39)
    db.session.add(pin_40)
    db.session.add(pin_41)
    db.session.add(pin_42)
    db.session.add(pin_43)
    db.session.add(pin_44)
    db.session.add(pin_45)
    db.session.add(pin_46)
    db.session.add(pin_47)
    db.session.add(pin_48)
    db.session.add(pin_49)
    db.session.add(pin_50)
    db.session.add(pin_51)
    db.session.add(pin_52)
    db.session.add(pin_53)
    db.session.add(pin_54)
    db.session.add(pin_55)
    db.session.add(pin_56)    

    db.session.commit()



def undo_pins():
    db.session.execute('TRUNCATE users RESTART IDENTITY CASCADE;')
    db.session.commit()