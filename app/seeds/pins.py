from app.models import db, Pin

def seed_pins():
    pin_1 = Pin(
        title='3 Days in Tokyo - The Perfect Itinerary for 3 Days in the Japanese Capital',
        description="This guide to 3 days in Tokyo will show you a 3-day Tokyo itinerary for visiting the capital of Japan. There's a lot you can do in Tokyo in a few days.",
        img_url='https://i.pinimg.com/236x/04/95/7b/04957b4f64ad15eecd2b7d29b4dbb72f.jpg',
        link='https://www.aladyinlondon.com/2018/01/3-days-tokyo.html',
        user_id=1
    )
    pin_2 = Pin(
        title="12 destinations in Asia that tourists haven't discovered yet",
        description='From an ancient tropical rainforest in Malaysia to a prehistoric city in South Korea, here are 12 must-see spots.',
        img_url='https://i.pinimg.com/564x/8d/13/3c/8d133ca0ab459138cdd81cc7cb407432.jpg',
        link='https://www.businessinsider.com/undiscovered-places-in-asia-2017-3?utm_medium=social&utm_campaign=social-share-click-thru&utm_source=pinterest&utm_content=slideshow&utm_term=mobileweb%2F#taipei-taiwan-6',
        user_id=2
    )
    pin_3 = Pin(
        title='How To Styles Shorts #shorts #YouTube',
        description='',
        img_url='https://i.pinimg.com/564x/ec/8a/9f/ec8a9f65aba5508166d4597ff73335ec.jpg',
        link='How to style shorts in the summer for very hot days and still be stylish .',
        user_id=1
    )
    pin_4 = Pin(
        title='Anakin Skywalker',
        description='A truly tragic story...',
        img_url='https://i.pinimg.com/564x/1b/c6/28/1bc628fc47d935eec42a5264da1b960d.jpg',
        link='',
        user_id=1
    )
    pin_5 = Pin(
        title='Top Gun Maverick',
        description='A must watch movie in 2022!',
        img_url='https://i.pinimg.com/564x/70/b6/7a/70b67a8e4f501ec780825c5b64297ce7.jpg',
        link='',
        user_id=2
    )
    pin_6 = Pin(
        title='Best things to do in Taipei, Taiwan',
        description='One of the most #instagram friendly places - the rainbow crosswalk is the perfect spot to visit during your trip to Taipei, Taiwan.',
        img_url='https://i.pinimg.com/564x/63/32/ea/6332ea47dbe1b7892d11b13c41f65ecc.jpg',
        link='',
        user_id=2
    )
    pin_7 = Pin(
        title='TheLast Spurs Great Memory',
        description='Hopefully, they can restore the good old memory.',
        img_url='https://i.pinimg.com/564x/a4/b1/ed/a4b1edefea665f868d4ad9ace07ca4e7.jpg',
        link='https://gotraveltipster.com/taipei-taiwan-things-to-do-complete-guide/',
        user_id=2
    )
    pin_8 = Pin(
        title='Mamba Forever',
        description='Long Live the Mamba!!!',
        img_url='https://i.pinimg.com/236x/f5/c3/30/f5c330268bbf8e7bff942fb29e922983.jpg',
        link='',
        user_id=2
    )
    pin_9 = Pin(
        title='Watkins Glen State Park',
        description='Watkins Glen State Park NY_DSC9650_16-HDR-16 by Greg Kluempers',
        img_url='https://i.pinimg.com/564x/31/bb/30/31bb3016ce95b81856231520c9bf03d4.jpg',
        link='',
        user_id=1
    )
    pin_10 = Pin(
        title='HOW TO EXPLORE KYOTO IN 2 DAYS',
        description='Check this post to plan your Kyoto trip. Check out for an amazing 2 days Kyoto itinerary to enjoy your time in Kyoto Japan.',
        img_url='https://i.pinimg.com/564x/57/db/e0/57dbe0709795673e81a5333411d5adac.jpg',
        link='https://thesologlobetrotter.com/kyoto-2-day-itinerary/',
        user_id=1
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

    db.session.commit()



def undo_pins():
    db.session.execute('TRUNCATE users RESTART IDENTITY CASCADE;')
    db.session.commit()