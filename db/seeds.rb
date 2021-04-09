# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


Route.delete_all
User.delete_all
Workout.delete_all

u1 = User.create!(
  {email: 'guest',
  password: 'password'}
)
u2 = User.create!(
  {email: 'guest1',
  password: 'password'}
)


r1 = Route.create!( 
    title: 'Park Run',
    start_long: -122.511281,
    start_lat: 37.769996,
    end_long:-122.511341,
    end_lat:37.769395,
<<<<<<< HEAD
<<<<<<< HEAD
    user_id: 23

=======
    user_id: a.id
>>>>>>> routes
=======
    user_id: u1.id
>>>>>>> routes
)

w1 = Workout.create!(
  title: 'morning run',
  description: 'barely made it',
  date: '2020-01-13',
  time: 23.22,
  run_type: 'run',
  route_id: r1.id
)

 