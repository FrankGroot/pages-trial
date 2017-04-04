---
layout: post
title:  "Welcome to AxonIQ"
date:   2017-04-03 11:34:20
categories: axoniq
author: Frank Groot
---
This is just an example blogpost without any meaning

It shows howto include code in a post at least :)
```java
    @Bean
    public MongoEventStorageEngine eventStorageEngine() throws Exception {
        XStreamSerializer serializer = new XStreamSerializer();
        serializer.getXStream().registerConverter(new JodaConverter());
        return new MongoEventStorageEngine(serializer, null, getAxonMongoEventTemplate(),
                new DocumentPerEventStorageStrategy());
    }
```

Yeah :baby:!