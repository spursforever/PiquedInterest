from app.models import db, Comment

def seed_comments():
    comment_1 = Comment(
        content="I will love Kobe forever!!!",
        user_id=1,
        pin_id=8
    )
    comment_2 = Comment(
        content="I wanna visit this place so bad!",
        user_id=1,
        pin_id=2
    )
    comment_3 = Comment(
        content="I still root for Spurs even though they suck right now...",
        user_id=2,
        pin_id=7
    )
    comment_4 = Comment(
        content="A very fascinating pin!",
        user_id=1,
        pin_id=3
    )
    
    db.session.add(comment_1)
    db.session.add(comment_2)
    db.session.add(comment_3)
    db.session.add(comment_4)
    
    
    db.session.commit()

def undo_comments():
    db.session.execute('TRUNCATE users RESTART IDENTITY CASCADE;')
    db.session.commit()