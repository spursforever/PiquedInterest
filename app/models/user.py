from .db import db
from werkzeug.security import generate_password_hash, check_password_hash
# from flask_login import UserMixin


class User(db.Model):
    __tablename__ = 'users'

    id = db.Column(db.Integer, primary_key=True)
    first_name = db.Column(db.String(60), nullable=False)
    last_name = db.Column(db.String(60), nullable=False)
    email = db.Column(db.String(255), nullable=False, unique=True)
    profile_pic = db.Column(db.String(2000))
    hashed_password = db.Column(db.String(255), nullable=False)

    @property
    def password(self):
        return self.hashed_password

    @password.setter
    def password(self, password):
        self.hashed_password = generate_password_hash(password)

    def check_password(self, password):
        return check_password_hash(self.password, password)
    
    # Single user can create many pins
    pins = db.relationship("Pin", back_populates="users")

    # Single user can post many comments
    comments = db.relationship("Comment", back_populates="users")

    def to_dict(self):
        return {
            'id': self.id,
            'first_name': self.first_name,
            'last_name': self.last_name,
            'email': self.email,            
            'profile_pic': self.profile_pic,
            'created_at': self.created_at,
            "updated_at": self.updated_at,
        }
