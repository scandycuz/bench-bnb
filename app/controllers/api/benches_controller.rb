class Api::BenchesController < ApplicationController
  def index
    @benches = Bench.all
  end

  def show
  end

  def create
  end

  def destroy
  end
end
