﻿using OliviaAPI.Persistence;
var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();

builder.Services.AddCors(options =>
       options.AddPolicy("myclients", builder =>
           builder.WithOrigins("http://localhost:5173", "http://localhost:5173").AllowAnyMethod().AllowAnyHeader()));

builder.Services.AddPersistenceService();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();
app.UseCors("myclients");
app.UseAuthorization();

app.MapControllers();

app.Run();

