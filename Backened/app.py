# from flask import Flask,jsonify,request,flash,send_from_directory
# import secrets
# from flask_cors import CORS
# from flask_sqlalchemy import SQLAlchemy
# from flask_migrate import Migrate
# import os
# import json
# from flask_bcrypt import Bcrypt,generate_password_hash
# from flask_session import Session
# from datetime import datetime, timedelta, timezone
# from flask_jwt_extended import create_access_token,get_jwt,get_jwt_identity, \
#                                unset_jwt_cookies, jwt_required, JWTManager
# from PIL import Image
# import fitz
# import io
# import pandas as pd

# app = Flask(__name__)
# app.app_context().push()

# secret_key = secrets.token_hex(16)
# app.config['SECRET_KEY'] = secret_key
# app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///site.db'
# app.config['UPLOAD_FOLDER']='static/images'
# db = SQLAlchemy(app)
# bcrypt=Bcrypt(app) 
# migrate = Migrate(app, db)
# jwt = JWTManager(app)
# app.config["JWT_ACCESS_TOKEN_EXPIRES"] = timedelta(hours=1)

# CORS(app, origins=["http://localhost:3000"])


# class User(db.Model):
#    id = db.Column(db.Integer, primary_key=True)
#    hospitalName = db.Column(db.String(80), unique=True, nullable=False)
#    address = db.Column(db.String(128), nullable=False) 
#    city=db.Column(db.String(200), nullable=False)
#    state=db.Column(db.Text,nullable=False)
#    pincode=db.Column(db.String(128),nullable=False)
#    hospitalRegistrationDate=db.Column(db.String(255),nullable=False)
#    numberOfAmbulanceAvailable=db.Column(db.String(255), nullable=False)
#    emailId=db.Column(db.String(255), nullable=False)
#    PhoneNumber=db.Column(db.String(255), nullable=False)
#    HospitalRegistrationNumber=db.Column(db.String(255), nullable=False)
#    EmergencyWardNumber=db.Column(db.String(255), nullable=False)
#    RegistrationCertificateUplaod=db.Column(db.String(255), nullable=False)
#    createPassword=db.Column(db.String(255), nullable=False)
#    confirmPassword=db.Column(db.String(255), nullable=False)
   
#    def __repr__(self):
#         return f"User('{self.username}')"



# db.create_all() 

# ALLOWED_EXTENSIONS = {'pdf', 'jpg', 'jpeg', 'png'}

# def allowed_file(filename):
#     return '.' in filename and filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS


# @app.route('/signup', methods=['POST'])
# def register():
#     data = request.get_json()
#     required_fields = ['hospitalName', 'address', 'city', 'state', 'pincode', 'hospitalRegistrationDate', 'numberOfAmbulanceAvailable', 'emailId', 'phoneNumber', 'hospitalRegistrationNumber', 'emergencyWardNumber', 'registrationCertificateUplaod', 'createPassword', 'confirmPassword']

#     # Check if all required fields are provided
#     missing_fields = [field for field in required_fields if field not in data or not data[field]]
#     if missing_fields:
#         return jsonify({'error': f'Missing required fields: {", ".join(missing_fields)}'}), 400

#     hospital_name = data.get('hospitalName')
#     address = data.get('address')
#     city = data.get('city')
#     state = data.get('state')
#     pincode = data.get('pincode')
#     hospital_registration_date = data.get('hospitalRegistrationDate')
#     number_of_ambulance_available = data.get('numberOfAmbulanceAvailable')
#     email_id = data.get('emailId')
#     phone_number = data.get('phoneNumber')
#     hospital_registration_number = data.get('hospitalRegistrationNumber')
#     emergency_ward_number = data.get('emergencyWardNumber')
#     registration_certificate_upload = data.get('registrationCertificateUplaod')
#     create_password = data.get('createPassword')
#     confirm_password = data.get('confirmPassword')

#     # Check if email already exists
#     if User.query.filter_by(emailId=email_id).first():
#         return jsonify({'error': 'Email already exists'}), 400

#     # Check if password and confirm password match
#     if create_password != confirm_password:
#         return jsonify({'error': 'Passwords do not match'}), 400

#     # Hash the password
#     hashed_password = bcrypt.generate_password_hash(create_password).decode('utf-8')

#     # Create a new user
#     user = User(
#         hospitalName=hospital_name,
#         address=address,
#         city=city,
#         state=state,
#         pincode=pincode,
#         hospitalRegistrationDate=hospital_registration_date,
#         numberOfAmbulanceAvailable=number_of_ambulance_available,
#         emailId=email_id,
#         PhoneNumber=phone_number,
#         HospitalRegistrationNumber=hospital_registration_number,
#         EmergencyWardNumber=emergency_ward_number,
#         RegistrationCertificateUplaod=registration_certificate_upload,
#         createPassword=hashed_password,
#         confirmPassword=confirm_password
#     )
    
#     # Add the user to the database
#     db.session.add(user)
#     db.session.commit()
    
#     # Return success message
#     return jsonify({'message': 'User registered successfully'}), 201


# @app.route('/login', methods=['POST'])

# def login():
#     data = request.get_json()
#     hospitalName=data.get('hospitalName')
#     emailId = data.get('emailId')
#     createPassword = data.get('createPassword')
#     user = User.query.filter_by(emailId=emailId).first()
#     if user and bcrypt.check_password_hash(user.createPpassword, createPassword):
#         access_token = create_access_token(identity=emailId)
#         response = {"message": "Login Successful", "access_token": access_token}
#         return jsonify(response), 200
        
#     else:
         
#         flash('Login Unsuccessful. Please check email and password', 'danger')
#         return jsonify({'message': 'Invalid credentials'}), 401




# # @app.route('/userprofile', methods=['POST', 'GET'])
# # @jwt_required()
# # def send_username():
# #     global emailitem 

    

# #     if request.method == 'POST':
# #         data = request.get_json()
# #         email = data.get('email')
# #         emailitem = email  
# #         print(f'Received email: {email}')

       
# #         return jsonify({'message': 'Email received'}), 200

# #     elif request.method == 'GET':
# #         user = User.query.filter_by(email=emailitem).first()
# #         print(user)
# #         user_post=Post.query.filter_by(user_id=user.email).all()
# #         post = [{'id': post.id, 'content': post.content,'image':post.image} for post in user_post]
# #         return jsonify({'username': user.username,'occupation':user.occupation,'email':user.email,'image':user.image,'posts':post}), 200










# @app.route('/account', methods=['GET'])
# @jwt_required()
# def account():
#     current_user=get_jwt_identity()
#     user=User.query.filter_by(email=current_user).first()
    
#     user_data = {
#             'username': user.username,
#             'occupation':user.occupation,
#             'image':user.image,
#             'email':user.email
#         }
    
#     return jsonify({'user': user_data}), 200





 



# @app.route('/static/images/<filename>',methods=['GET'])

# def uploaded_image(filename):
#     return send_from_directory(app.config['UPLOAD_FOLDER'],filename)     





# @app.route("/logout", methods=["POST"])
# def logout():
#     response = jsonify({"msg": "logout successful"})
#     unset_jwt_cookies(response)
#     return response


# if __name__ == '__main__':
#    app.run(debug=True)







from flask import Flask,jsonify,request,flash,send_from_directory
import secrets
from flask_cors import CORS
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
import os
import json
from flask_bcrypt import Bcrypt,generate_password_hash
from flask_session import Session
from datetime import datetime, timedelta, timezone
from flask_jwt_extended import create_access_token,get_jwt,get_jwt_identity, \
                               unset_jwt_cookies, jwt_required, JWTManager
from PIL import Image
import fitz
import io
import pandas as pd

app = Flask(__name__)
app.app_context().push()

secret_key = secrets.token_hex(16)
app.config['SECRET_KEY'] = secret_key
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///site.db'
app.config['UPLOAD_FOLDER']='static/images'
db = SQLAlchemy(app)
bcrypt=Bcrypt(app) 
migrate = Migrate(app, db)
jwt = JWTManager(app)
app.config["JWT_ACCESS_TOKEN_EXPIRES"] = timedelta(hours=1)

CORS(app, origins=["http://localhost:3000"])


class User(db.Model):
   id = db.Column(db.Integer, primary_key=True)
   hospital_name = db.Column(db.String(80))
   address = db.Column(db.String(128)) 
   city=db.Column(db.String(200))
   state=db.Column(db.Text)
   pincode=db.Column(db.String(128))
   hospital_registration_date=db.Column(db.String(255))
   number_of_ambulance_available=db.Column(db.String(255))
   email=db.Column(db.String(255),unique=True)
   phone_number=db.Column(db.String(255))
   hospital_registration_number=db.Column(db.String(255))
   emergency_ward_number=db.Column(db.String(255))
   password=db.Column(db.String(255))
   confirm_password=db.Column(db.String(255))

   
   def __repr__(self):
        return f"User('{self.emaiId}')"



db.create_all() 

ALLOWED_EXTENSIONS = {'pdf', 'jpg', 'jpeg', 'png'}

def allowed_file(filename):
    return '.' in filename and filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS


@app.route('/register', methods=['POST'])
def register():
    data = request.get_json()
    hospital_name = data.get('hospital_name')
    address = data.get('address')
    city = data.get('city')
    state = data.get('state')
    pincode = data.get('pincode')
    hospital_registration_date = data.get('hospital_registration_date')
    number_of_ambulance_available = data.get('number_of_ambulance_available')
    email = data.get('email')
    phone_number = data.get('phone_number')
    hospital_registration_number = data.get('hospital_registration_date')
    emergency_ward_number = data.get('emergency_ward_number')
    password = data.get('password')
    confirm_password = data.get('confirm_password')
    print(hospital_name)
   

    if not email or not password  :
        return jsonify({'error': 'All fields are required'}), 400

    if User.query.filter_by(email=email).first():
        return jsonify({'error': 'Email already exists'}), 400
    

    hashed_password = bcrypt.generate_password_hash(password).decode('utf-8')
    user = User(email=email,  password=hashed_password, hospital_name=hospital_name,emergency_ward_number=emergency_ward_number,address=address,city=city,pincode=pincode,state=state,hospital_registration_date=hospital_registration_date,hospital_registration_number=hospital_registration_number,confirm_password=confirm_password,number_of_ambulance_available=number_of_ambulance_available,phone_number=phone_number)
    db.session.add(user)
    db.session.commit()
    flash('Your account has been created! You are now able to log in', 'success')
    
    return jsonify({'message': 'User registered successfully'}), 201

@app.route('/login', methods=['POST'])

def login():
    data = request.get_json()
    
    email = data.get('email')
    password = data.get('password')
    hospital_name=data.get('hospital_name')
    user = User.query.filter_by(email=email).first()
    if user and bcrypt.check_password_hash(user.password, password):
        access_token = create_access_token(identity=email)
        response = {"message": "Login Successful", "access_token": access_token}
        return jsonify(response), 200
        
    else:
         
        flash('Login Unsuccessful. Please check email and password', 'danger')
        return jsonify({'message': 'Invalid credentials'}), 401



@app.route('/user_data', methods=['GET'])
def get_user_data():
    users = User.query.all()
    user_data = []
    for user in users:
        user_info = {
            'id': user.id,
            'hospital_name': user.hospital_name,
            'address': user.address,
            'city': user.city,
            'state': user.state,
            'pincode': user.pincode,
            'hospital_registration_date': user.hospital_registration_date,
            'number_of_ambulance_available': user.number_of_ambulance_available,
            'email': user.email,
            'phone_number': user.phone_number,
            'hospital_registration_number': user.hospital_registration_number,
            'emergency_ward_number': user.emergency_ward_number
        }
        user_data.append(user_info)
    return jsonify(user_data)











@app.route('/account', methods=['GET'])
@jwt_required()
def account():
    current_user=get_jwt_identity()
    user=User.query.filter_by(email=current_user).first()
    
    user_data = {
            'username': user.username,
            'occupation':user.occupation,
            'image':user.image,
            'email':user.email
        }
    
    return jsonify({'user': user_data}), 200





 



@app.route('/static/images/<filename>',methods=['GET'])

def uploaded_image(filename):
    return send_from_directory(app.config['UPLOAD_FOLDER'],filename)     





@app.route("/logout", methods=["POST"])
def logout():
    response = jsonify({"msg": "logout successful"})
    unset_jwt_cookies(response)
    return response


if __name__ == '__main__':
   app.run(debug=True)



















