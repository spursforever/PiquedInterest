from .db import db
from flask_login import UserMixin
from datetime import datetime

class Comment(db.Model, UserMixin):
    __tablename__ = 'comments'

    id = db.Column(db.Integer, primary_key=True)
    content = db.Column(db.Text, nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey("users.id"), nullable=False)
    pin_id = db.Column(db.Integer, db.ForeignKey("pins.id"), nullable=False)
    created_at = db.Column(db.DateTime, default=datetime.now())
    updated_at = db.Column(db.DateTime, default=datetime.now())
    # one pin can have many comments
    pins = db.relationship('Pin', back_populates='comments')

    # comments are made by a single user
    users = db.relationship('User', back_populates='comments')

    def to_dict(self):
        return {
            'id': self.id,
            'content': self.content,
            'user_id': self.user_id,
            'pin_id': self.pin_id,
            "created_at": self.created_at,
            "updated_at": self.updated_at,            
        } 
        

    

