# What is Stream in NodeJS

- streams are instances of EventEmitter class!
- stream used to process (read and write) data piece by piece(chunks), 
without completing the whole read or write operation,
and therefore without keeping all the data in memory

### Example of Stream

- We use streams to read a big file, so we can show some data as output without reading whole file at once
- Video Streaming Companies like *Youtube*, *Netflix* uses this kind of technology to load a video in chunks so we can watch the video without loading the whole video file. 

### Benifits of Using Stream

- Perfact for handling large volume of data, like Videos
- More effecient data processing in terms of memory (no need to keep all data in memory) and time (we don't have to wait until all the data is avialable).

## Types of Stream

- Readable Stream
- Writable Stream
- Duplex Stream
- Transform Stream


## Readable Stream 

- Stream from which we can read 

### Example 

- http request, we listen to http requests where we read requests from http event
- fs read streams

### Important Events

- data
- end

### Important Functions 

- pipe()
- read()

## Writable Stream 

- Stream from which we can write data  

### Example 

- http responses, we send response to http request using http response
- fs write streams

### Important Events

- drain
- finish

### Important Functions 

- write()
- end()

## Duplex Stream 

- Streams which can be readable & writable both at once  

### Example 

- new web socket, 

## Transform Stream 

- Streams that can transform data as it is written or read 

### Example 

- zlib Gzip creation

## Resource Links

- https://github.com/jonasschmedtmann/complete-node-bootcamp



