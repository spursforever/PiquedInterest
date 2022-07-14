from .db import db
from flask_login import UserMixin
from datetime import datetime

class Pin(db.Model, UserMixin):
    __tablename__ = 'pins'

    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(255), nullable=False)
    description = db.Column(db.Text)
    img_url = db.Column(db.String(2000), nullable=False)
    
    user_id = db.Column(db.Integer, db.ForeignKey("users.id"), nullable=False)
    created_at = db.Column(db.DateTime, default=datetime.now())
    updated_at = db.Column(db.DateTime, default=datetime.now())

    # One user can own many pins
    user = db.relationship('User', back_populates='pins')

    # One user can write many comments
    comments = db.relationship('Comment', back_populates='pin', cascade="all, delete-orphan")

    def to_dict(self):
        return {
            'id': self.id,
            'title': self.title,
            'description': self.description,
            'img_url': self.img_url,                      
            'users': self.user.to_dict(),
            'comments':[comment.to_dict() for comment in self.comments],
        }

