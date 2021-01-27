class User < ApplicationRecord
    validates :email, presence: true, uniqueness: true
    validates :session_token, presence: true
    validates :password_digest, presence: true
    validates :password, length: {minimum: 6, allow_nil: true}

    has_many :routes,
      foreign_key: :user_id

    has_many :workouts,
      through: :routes,
      source: :workouts
    


    attr_reader :password
    after_initialize :ensure_session_token

    def password=(password)
        @password = password
        self.password_digest = BCrypt::Password.create(password)
    end

    def is_password?(password)
        bcrypt = BCrypt::Password.new(password_digest)
        bcrypt.is_password?(password)
    end

    def self.find_by_credentials(email, password)
        user = User.find_by(email: email) # find takes id - 
        return user if user && user.is_password?(password)
        nil
    end

    def reset_session_token!
        self.session_token = User.generate_unique_secure_token
        self.save
        self.session_token
    end

    def generate_unique_secure_token
        SecureRandom.urlsafe_base64
    end

    private

    def ensure_session_token
        self.session_token ||= User.generate_unique_secure_token
    end
end
