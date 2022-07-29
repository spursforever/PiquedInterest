from app.models import db, Comment

def seed_comments():
    comment_1 = Comment(
        content="A very fascinating pin!",
        user_id=1,
        pin_id=1
    )
    comment_2 = Comment(
        content="This makes me hungry!",
        user_id=1,
        pin_id=2
    )
    comment_3 = Comment(
        content="This duck is on fire!!!",
        user_id=1,
        pin_id=5
    )
    comment_4 = Comment(
        content="What's this?",
        user_id=5,
        pin_id=3
    )
    comment_5 = Comment(
        content="It's a legendary basketball comic in 1990s.",
        user_id=2,
        pin_id=3
    )
    comment_6 = Comment(
        content="That's way too old school for me.",
        user_id=5,
        pin_id=3
    )
    comment_7 = Comment(
        content="Okay, James...",
        user_id=2,
        pin_id=3
    )
    comment_8 = Comment(
        content="Interesting discussion over here...",
        user_id=1,
        pin_id=3
    )
    comment_9 = Comment(
        content="Good old time...",
        user_id=2,
        pin_id=10
    )
    comment_10 = Comment(
        content="I can't live without this!!!",
        user_id=6,
        pin_id=13
    )
    comment_11 = Comment(
        content="This place looks very interesting",
        user_id=1,
        pin_id=11
    )
    comment_12 = Comment(
        content="Well, it's food paradise for me~",
        user_id=2,
        pin_id=11
    )
    
    db.session.add(comment_1)
    db.session.add(comment_2)
    db.session.add(comment_3)
    db.session.add(comment_4)
    db.session.add(comment_5)
    db.session.add(comment_6)
    db.session.add(comment_7)
    db.session.add(comment_8)
    db.session.add(comment_9)
    db.session.add(comment_10)
    db.session.add(comment_11)
    db.session.add(comment_12)
    
    
    
    db.session.commit()

def undo_comments():
    db.session.execute('TRUNCATE users RESTART IDENTITY CASCADE;')
    db.session.commit()