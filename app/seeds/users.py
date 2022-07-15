from app.models import db, User


# Adds a demo user, you can add other users here if you want
def seed_users():
    demo = User(
        first_name='Demo',
        last_name='Demo', 
        email='demo@aa.io', 
        password='password',
    )
    Dayton = User(
        first_name='Dayton',
        last_name='Chen',
        email='dayton@google.com',
        password='password',       
    )
    Grant = User(
        first_name='Grant',
        last_name='Walton', 
        email='grant@google.com', 
        password='password',        
    )    
    Huyen = User(
        first_name='Huyen', 
        last_name='Nguyen',
        email='huyen@google.com', 
        password='password',
        
    )
    James = User(
        first_name='James',
        last_name='Chen',
        email='james@google.com', 
        password='password',
    )
    Khoi = User(
        first_name='Khoi', 
        last_name='Duong',
        email='khoi@google.com', 
        password='password',        
    )    

    db.session.add(demo)
    db.session.add(Dayton)
    db.session.add(Grant)
    db.session.add(Huyen)
    db.session.add(James)
    db.session.add(Khoi)

    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_users():
    db.session.execute('TRUNCATE users RESTART IDENTITY CASCADE;')
    db.session.commit()
