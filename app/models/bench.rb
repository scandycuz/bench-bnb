class Bench < ActiveRecord::Base
  validates :lat, uniqueness: { scope: :lng }
end
