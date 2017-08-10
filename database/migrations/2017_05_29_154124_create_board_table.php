<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateBoardTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        //create board table
		Schema::create('board', function(Blueprint $table){
			
             $table->bigInteger('board_id');
             $table->bigInteger('owner_id');

             $table->string('board_name');
             $table->bigInteger('type_id');
             $table->text('location_id');
             $table->text('offer_id');
             $table->bigInteger('rating');
             $table->text('site_id');
             $table->text('facility_id');
             $table->dateTime('created_at');
		});
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        //
    }
}
